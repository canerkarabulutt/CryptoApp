import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

interface LineChartProps {
  data: number[]; // Veri dizisi
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const viewBoxWidth = 300; // SVG görüntü kutusu genişliği
  const viewBoxHeight = 120; // SVG görüntü kutusu yüksekliği
  const padding = 24; // Grafik kenar boşluğu
  const chartWidth = viewBoxWidth - padding * 2; // Grafik genişliği
  const chartHeight = viewBoxHeight - padding * 2; // Grafik yüksekliği
  const maxYValue = Math.max(...data, 0); // Veri içindeki maksimum pozitif değer
  const minYValue = Math.min(...data, 0); // Veri içindeki maksimum negatif değer
  const dataPoints = data.length; // Veri noktalarının sayısı
  const stepX = chartWidth / (dataPoints - 2); // X ekseni adımı
  const stepY = chartHeight / (maxYValue - minYValue); // Y ekseni adımı

  // X ekseni için kesikli çizgiler oluşturma (+ işareti şeklinde)
  const xAxisLines = (
    <>
      {/* Sol yatay çizgi */}
      <Path
        d={`M ${padding} ${chartHeight / 2} H ${chartWidth / 2 }`}
        stroke="#FFFFFF"
        strokeWidth={1}
        strokeDasharray="4"
      />
      {/* Sağ yatay çizgi */}
      <Path
        d={`M ${chartWidth / 2} ${chartHeight / 2} H ${chartWidth + padding}`}
        stroke="#FFFFFF"
        strokeWidth={1}
        strokeDasharray="4"
      />
      {/* Üst dikey çizgi */}
      <Path
        d={`M ${chartWidth / 2} ${padding} V ${chartHeight / 4 - padding}`}
        stroke="#FFFFFF"
        strokeWidth={1}
        strokeDasharray="4"
      />
      {/* Alt dikey çizgi */}
      <Path
        d={`M ${chartWidth / 2} ${chartHeight / 2} V ${chartHeight + padding}`}
        stroke="#FFFFFF"
        strokeWidth={1}
        strokeDasharray="4"
      />
    </>
  );

  // SVG için veri noktalarını oluşturma
  const dataPath = data
    .map((value, index) => `${index * stepX},${chartHeight / 1 - (value - minYValue) * stepY}`)
    .join(' ');

  // SVG için veri noktalarının dairelerini oluşturma
  const dataCircles = data.map((value, index) => (
    <Circle
      key={index}
      cx={index * stepX}
      cy={chartHeight / 1 - (value - minYValue) * stepY}
      r={4}
      fill="#00F0FF"
    />
  ));

  return (
    <View style={styles.container}>
      <Svg width={viewBoxWidth} height={viewBoxHeight}>
        {/* X ekseni için kesikli çizgiler */}
        {xAxisLines}
        {/* Veri çizgisi */}
        <Path
          d={`M 0 ${chartHeight / 2 - data[0] * stepY} L ${dataPath}`}
          stroke="#00F0FF"
          fill="none"
          strokeWidth={2}
        />
        {/* Veri daireleri */}
        {dataCircles}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LineChart;
