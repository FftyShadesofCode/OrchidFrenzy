export default {
    name: 'orchids',
    title: 'Orchids',
    type: 'document',
    fields: [
        {
            name: 'genre',
            title: 'Genre',
            type: 'string'
        },
        {
            name: 'grex',
            title: 'Grex',
            type: 'string'
        },
        {
          name: 'about',
          title: 'About',
          type: 'string'
        },
        {
            name: 'fragrant',
            title: 'Fragrant',
            type: 'string'
        },
        {
            name: 'careInformation',
            title: 'Care Information',
            type: 'array',
            of: [{
                type: 'careInformation'
            }]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'growerId',
            title: 'GrowerID',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy'
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{
                type: 'save'
            }]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{
                type: 'comment'
            }]
        }
    ]
}