var dataModule = function () {

    var posts = [

        {
            id: '1',
            user: 'koscia',
            description: 'some fancy descriptions',
            createdAt: new Date('2018-03-21T23:00:00'),
            photoLink: '/photos/karatkievic3.jpg',
            hashtags: ['nature'],
            likesFrom: ['arsieni'],
            active: true
        },

        {
            id: '2',
            user: 'pasa',
            description: 'another dummy descriptions',
            createdAt: new Date('2018-03-23T23:00:00'),
            photoLink: '/photos/karatkievic2.jpg',
            hashtags: ['rest', 'nature', 'work', 'sunset'],
            likesFrom: ['koscia', 'pasa'],
            active: true
        },

        {
            id: '3',
            user: 'pasa',
            description: 'another dummy descriptions',
            createdAt: new Date('2018-03-21T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rest', 'rain', 'evening', 'comfort'],
            likesFrom: ['arsieni', 'koscia', 'admin', 'pasa'],
            active: true
        },

        {
            id: '4',
            user: 'pasa',
            description: 'another dummy descriptions',
            createdAt: new Date('2018-03-23T23:00:00'),
            photoLink: '/photos/karatkievic3.jpg',
            hashtags: ['nature', 'car', 'work', 'sunset', 'comfort'],
            likesFrom: ['arsieni', 'koscia'],
            active: true
        },

        {
            id: '5',
            user: 'koscia',
            description: 'another dummy descriptions',
            createdAt: new Date('2018-03-21T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rain', 'nature', 'evening'],
            likesFrom: ['koscia'],
            active: true
        },

        {
            id: '6',
            user: 'koscia',
            description: 'some fancy descriptions',
            createdAt: new Date('2018-03-23T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rain', 'nature', 'evening'],
            likesFrom: ['koscia'],
            active: true
        },

        {
            id: '7',
            user: 'admin',
            description: 'hope you enjoy reading those descriptions',
            createdAt: new Date('2018-03-21T23:00:00'),
            photoLink: '/photos/karatkievic3.jpg',
            hashtags: ['nature', 'car', 'evening', 'comfort'],
            likesFrom: ['admin', 'pasa'],
            active: true
        },

        {
            id: '8',
            user: 'arsieni',
            description: 'hope you enjoy reading those descriptions',
            createdAt: new Date('2018-03-23T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rest', 'work', 'evening'],
            likesFrom: ['arsieni', 'koscia', 'admin', 'pasa'],
            active: true
        },

        {
            id: '9',
            user: 'admin',
            description: 'another dummy descriptions',
            createdAt: new Date('2018-03-22T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rain', 'comfort'],
            likesFrom: ['arsieni'],
            active: true
        },

        {
            id: '10',
            user: 'pasa',
            description: 'some fancy descriptions',
            createdAt: new Date('2018-03-22T23:00:00'),
            photoLink: '/photos/karatkievic2.jpg',
            hashtags: ['rest', 'work', 'evening'],
            likesFrom: ['arsieni'],
            active: true
        },

        {
            id: '11',
            user: 'arsieni',
            description: 'some fancy descriptions',
            createdAt: new Date('2018-03-20T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['car', 'work', 'comfort'],
            likesFrom: ['arsieni', 'admin', 'pasa'],
            active: true
        },

        {
            id: '12',
            user: 'arsieni',
            description: 'some fancy descriptions',
            createdAt: new Date('2018-03-22T23:00:00'),
            photoLink: '/photos/karatkievic3.jpg',
            hashtags: ['rain', 'work', 'sunset', 'comfort'],
            likesFrom: ['arsieni', 'koscia', 'admin', 'pasa'],
            active: true
        },

        {
            id: '13',
            user: 'koscia',
            description: 'hope you enjoy reading those descriptions',
            createdAt: new Date('2018-03-20T23:00:00'),
            photoLink: '/photos/karatkievic3.jpg',
            hashtags: ['work', 'comfort'],
            likesFrom: ['admin', 'pasa'],
            active: true
        },

        {
            id: '14',
            user: 'admin',
            description: 'some fancy descriptions',
            createdAt: new Date('2018-03-20T23:00:00'),
            photoLink: '/photos/karatkievic2.jpg',
            hashtags: ['rest', 'car', 'work', 'comfort'],
            likesFrom: ['arsieni', 'koscia', 'admin'],
            active: true
        },

        {
            id: '15',
            user: 'koscia',
            description: 'another dummy descriptions',
            createdAt: new Date('2018-03-21T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rest', 'rain', 'nature', 'work'],
            likesFrom: ['arsieni', 'pasa'],
            active: true
        },

        {
            id: '16',
            user: 'koscia',
            description: 'hope you enjoy reading those descriptions',
            createdAt: new Date('2018-03-23T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rest', 'rain', 'nature', 'sunset', 'evening'],
            likesFrom: ['koscia', 'admin', 'pasa'],
            active: true
        },

        {
            id: '17',
            user: 'admin',
            description: 'some fancy descriptions',
            createdAt: new Date('2018-03-20T23:00:00'),
            photoLink: '/photos/karatkievic1.jpg',
            hashtags: ['rest', 'nature', 'car', 'comfort'],
            likesFrom: ['admin', 'pasa'],
            active: true
        },

        {
            id: '18',
            user: 'koscia',
            description: 'another dummy descriptions',
            createdAt: new Date('2018-03-21T23:00:00'),
            photoLink: '/photos/karatkievic2.jpg',
            hashtags: ['rain', 'rest', 'car', 'sunset', 'comfort'],
            likesFrom: ['koscia'],
            active: true
        },

        {
            id: '19',
            user: 'koscia',
            description: 'hope you enjoy reading those descriptions',
            createdAt: new Date('2018-03-22T23:00:00'),
            photoLink: '/photos/karatkievic3.jpg',
            hashtags: ['nature'],
            likesFrom: ['arsieni', 'admin', 'pasa'],
            active: true
        },

        {
            id: '20',
            user: 'admin',
            description: 'hope you enjoy reading those descriptions',
            createdAt: new Date('2018-03-20T23:00:00'),
            photoLink: '/photos/karatkievic2.jpg',
            hashtags: ['rain', 'nature', 'work', 'sunset'],
            likesFrom: ['admin', 'pasa'],
            active: true
        }


    ];

    return {
        posts: posts
    }

}();