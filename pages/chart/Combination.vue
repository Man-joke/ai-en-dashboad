<template>
    <ChartCombination :chartData="chartData" />
</template>
<script setup>
const chartData = {
    labels: ['9월 11일', '9월 12일', '9월 13일', '9월 14일', '9월 15일', '9월 16일', '9월 17일'],
    datasets: [
        {
            type: 'line',
            data: [95, 92, 88, 76, 91, 90, 86],
            order: 1,
            borderWidth: 2,
            borderColor: '#139D42',
            pointStyle: 'circle',
            pointBackgroundColor: '#139D42',
            pointRadius: 4, // 데이터 레이블 설정,
            datalabels: {
                display: 'true',
                color: '#171717',
                align: 'top',
                formatter: function (value, context) {
                    return value + '%';
                },
                backgroundColor: 'white',
                borderColor: '#373737',
                borderWidth: 1,
                borderRadius: 5,
                textAlign: 'center',
                offset: 10,
                font: function(context){
                    var height = context.chart.height;
                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                    var size = Math.round(height / 40);
                    return {
                        family: 'NotoSansKR',
                        size: size * 1.25, // 1920에 20
                        weight: 700,
                    }
                },
            }
        },
        {
            type: 'bar',
            label: '응시한 단어 수',
            data: [70, 33, 78, 75, 54, 84, 57],
            backgroundColor: '#324d7e',
            stack: 'total',
            order: 2,
            barPercentage: 0.35,
            categoryPercentage: 0.7
        },
        {
            type: 'bar',
            label: '알고 있는 단어 수',
            data: [70 / 3, 11, 26, 25, 18, 28, 19],
            backgroundColor: '#80c7fd',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.3
        },
        {
            type: 'bar',
            label: '조금 알거나 모르는 단어 수',
            data: [70 / 3, 11, 26, 25, 18, 28, 19],
            backgroundColor: '#ffc008',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.3
        },
        {
            type: 'bar',
            label: '모르는 단어 수',
            data: [70 / 3, 11, 26, 25, 18, 28, 19],
            backgroundColor: '#ffa503',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.3
        }
    ]
};
</script>