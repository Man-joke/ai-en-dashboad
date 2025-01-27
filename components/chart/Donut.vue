<template>
    <div class="chart_donut">
        <div class="chart_contents type_donut">
            <canvas ref="chart"></canvas>
            <div class="text_wrap">
                <span>얼마나</span>
                <strong>{{ getTypeText }}</strong>
            </div>
        </div>
        <div class="chart-bar">
            <div class="use-word">
                <span class="bullet color-1"></span>
                <p>10회 이상 방문</p>
            </div>
            <div class="use-word">
                <span class="bullet color-2"></span>
                <p>6~9회 방문</p>
            </div>
            <div class="use-word">
                <span class="bullet color-3"></span>
                <p>3~5회 방문</p>
            </div>
            <div class="use-word">
                <span class="bullet color-4"></span>
                <p>1~2회 방문</p>
            </div>
            <div class="use-word">
                <span class="bullet color-5"></span>
                <p>방문 기록 없음</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $Chart } = useNuxtApp();
const props = defineProps(['type', 'chartData']);
const chart = ref(null);

const getTypeText = computed(() => {
    if (props.type === 'often') {
        return '자주';
    }
    if (props.type === 'much') {
        return '많이';
    }
    if (props.type === 'long') {
        return '오래';
    }
});

const chartOptions = ref({
    layout: {
        padding: 50
    },
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: false
        }
    },
    animation: {
        onComplete: function (animation) {
            // 애니메이션이 완료되면 각 영역 위에 데이터 라벨 그리기
            const chart = animation.chart;

            chart.data.labels.forEach((label, index) => {
                const piece = chart.getDatasetMeta(0).data[index];
                drawLabel(chart, piece, index);
            });
        }
    }
});

function drawLabel(chart, piece, index) {
    const ctx = chart.ctx;
    const { x, y, startAngle, endAngle, innerRadius, outerRadius } = piece;
    const radius = (innerRadius + outerRadius) / 2;
    const midAngle = (startAngle + endAngle) / 2;
    const labelRadius = radius * 1.25; // 테두리로부터 라벨까지의 거리

    // 데이터 라벨의 위치 계산
    const posX = x + labelRadius * Math.cos(midAngle);
    const posY = y + labelRadius * Math.sin(midAngle);

    ctx.save();
    const dataValue = chart.data.datasets[0].data[index];

    // 텍스트 스타일 설정
    ctx.fillStyle = '#171717'; // 텍스트 색상
    ctx.font = '700 1.6rem NotoSansKR';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    // 데이터 값 가져오기
    const value = dataValue + '%';

    // 배경 그리기
    ctx.fillStyle = '#fff'; // 배경색 설정

    ctx.beginPath();
    let dataRadius = dataValue / 2;

    ctx.arc(posX, posY, dataRadius + 12, 0, 2 * Math.PI);
    ctx.fill();

    // 텍스트 그리기
    ctx.fillStyle = '#171717'; // 텍스트 색상
    ctx.fillText(value, posX, posY);

    const dataset = chart.data.datasets[0];
    ctx.strokeStyle = dataset.borderColor[index]; // 테두리 색상

    ctx.lineWidth = 3; // 테두리 두께
    ctx.beginPath();
    ctx.arc(posX, posY, dataRadius + 12, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();
}

onMounted(() => {
    new $Chart(chart.value, {
        data: props.chartData,
        options: chartOptions.value
    });
});
</script>
