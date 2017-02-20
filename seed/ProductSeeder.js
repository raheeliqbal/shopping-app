var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('localhost:27017/shopping');



var products = [
    new Product({
        imagePath: 'http://static9.cdn.ubisoft.com/resource/en-US/game/forhonor/game/For_Honor_Keyart_2016.jpg',
        title: 'FOR HONOR FOR PS4 GAME',
        description: 'Awesome Game!!!',
        price: 5799
    }),
    new Product({
        imagePath: 'https://onlyfullgames.com/wp-content/uploads/2017/01/Sniper-Elite-4-download.jpg',
        title: 'SNIPER ELITE 4 FOR PS4 GAME',
        description: 'Awesome Game!!!',
        price: 5449
    }),
    new Product({
        imagePath: 'https://static.raru.co.za/cover/2015/06/29/2783752-l.jpg?v=1473151492',
        title: 'HITMAN: THE COMPLETE FIRST SEASON FOR PS4 GAME',
        description: 'Awesome Game!!!',
        price: 3949
    }),
    new Product({
    imagePath: 'http://cdn.wccftech.com/wp-content/uploads/2016/06/killing-floor-2-art-1920x1080.png',
    title: 'KILLING FLOOR 2 FOR PS4 GAME',
    description: 'Awesome Game!!!',
    price: 4749
    }),
    new Product({
        imagePath: 'http://img.ozgameshop.com/pc_and_video_games/games/ps4/yesterday_origins_2_raw.jpg',
        title: 'YESTERDAY ORIGINS FOR PS4 GAME',
        description: 'Awesome Game!!!',
        price: 4399
    }),
    new Product({
        imagePath: 'http://gamingphobia.com/wp-content/uploads/2016/09/resident_evil_7_biohazard.jpg',
        title: 'RESIDENT EVIL 7: BIOHAZARD FOR PS4 GAME',
        description: 'Awesome Game!!!',
        price: 4649
    }),
    new Product({
        imagePath: 'https://gamerant.com/wp-content/uploads/Robinson-The-Journey-PS-VR.jpg',
        title: 'ROBINSON: THE JOURNEY FOR PLAYSTATION VR GAME',
        description: 'Awesome Game!!!',
        price: 5499
    }),
    new Product({
        imagePath: 'https://gamehypermart.com/image/GHM/CONSOLE/PS4/Games/Final%20Fantas%20XV/PSN-RM100.jpg',
        title: 'FINAL FANTASY XV FOR PS4 GAME',
        description: 'Awesome Game!!!',
        price: 4599
    }),
    new Product({
        imagePath: 'http://allstargaming.com.au/images/detailed/1/Lara_Croft_and_the_Temple_of_Osiris_Gold_Edition_PS4_yh0i-w6.jpg',
        title: 'LARA CROFT & THE TEMPLE OF OSIRIS GOLD EDITION FOR PS4 GAME',
        description: 'Awesome Game!!!',
        price: 4949
    })
];

var done = 0;
for(var i = 0; i < products.length; i++)
{
    products[i].save(function(err, results)
    {
        done++;
        if(done === products.length)
        {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
