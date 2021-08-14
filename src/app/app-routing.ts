export const navItems = [
    {
        url:'/home',
        name: 'Home'
    }, 
    {
        url:'/farm-supplies',
        name: 'Farm Supplies & Tools',
        children: [
            {
                url:'/livestock',
                name: 'Livestock'
            },
            {
                url:'/plants',
                name: 'Plants'
            },
            {
                url:'/tools',
                name: 'Tools'
            }
        ]
    },
    {
        url:'/snacks',
        name: 'Snacks'
    }

];