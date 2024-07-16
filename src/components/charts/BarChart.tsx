import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface BarChartProps {
  data: number[]; // Veri dizisi
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const barWidth = 20; // Bar genişliği
  const maxHeight = 100; // Maksimum bar yüksekliği
  const scaleFactor = maxHeight / Math.max(...data); // Veri skalası

  return (
    <View style={styles.container}>
      <Svg width={data.length * (barWidth + 10)} height={maxHeight}>
        {data.map((value, index) => (
          <Rect
            key={index}
            x={index * (barWidth + 10)}
            y={maxHeight - value * scaleFactor}
            width={barWidth}
            height={value * scaleFactor}
            fill="#00F0FF"
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BarChart;
