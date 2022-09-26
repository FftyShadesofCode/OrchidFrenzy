export default {
    name: 'humidity',
    title: 'Humidity',
    type: 'document',
    fields: [
        {
            name: 'highHumidity',
            title: 'High Humidity(30%-50%)',
            type: 'string',
        },
        {
            name: 'mediumHumidity',
            title: 'Medium Humidity(45%-70%)',
            type: 'string',
        },
        {
            name: 'lowHumidity',
            title: 'Low Humidity(65%-80%)',
            type: 'string',
        }
    ]
}