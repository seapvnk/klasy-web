import React from 'react';

interface ChartImageProps {
    chartText: string;
    chartInformation: Array<{
        label: string;
        quantity: number; 
    }>;
}

const ChartImage: React.FC<ChartImageProps> = props => {
    const {chartInformation, chartText} = props;
    const chartApi = 'https://quickchart.io';
    const chartValues = chartInformation.map(information => {
        return information.quantity;
    });
    const totalValue = chartValues.reduce((acc, currentValue) => acc + currentValue);
    const chartStyle = {
        container: {
            width: '100%',
            maxWidth: '750px',
            margin: '0px auto',
        },
        image: {
            width: '100%',
        }
    };
    const chartInfo = {
        type: 'doughnut',
        data: {
            labels: chartInformation.map(information => {
                return information.label;
            }),
            datasets: [{
                data: chartValues,
            }]
        },
        options: {
            plugins: {
                doughnutlabel: {
                    labels: [
                        {text: totalValue, font: {size:20}},
                        {text: chartText}
                    ]
                }
            }
        }
    }

    const chartApiRequest = `${chartApi}/chart?c=${JSON.stringify(chartInfo)}`;

    return (
        <div style={chartStyle.container} className="card-image">
            <img
                alt="admin chart"
                src={chartApiRequest} 
                style={chartStyle.image}
            />
        </div>   
    );
}

export default ChartImage;