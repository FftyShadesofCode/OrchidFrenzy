export default {
    name: 'careInformation',
    title: 'Care Information',
    type: 'document',
    fields: [
        {
            name: 'light',
            title: 'Light',
            type: 'array',
            of: [{
                type: 'light'
            }]
        },
        {
            name: 'temp',
            title: 'Temperature',
            type: 'array',
            of: [{
                type: 'temp'
            }]
        },
        {
            name: 'humidity',
            title: 'Humidity',
            type: 'array',
            of: [{
                type: 'humidity'
            }]
        },
    ]
}