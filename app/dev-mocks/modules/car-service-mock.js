'use strict';

angular.module('myMocks.carService', [])
  .run(function($httpBackend, CAR_LIST) {

    // Instead of reading a JSON file, normally we should have
    // a constant in this mock module as mocked data
    $httpBackend.whenGET(/\/services\/car/)
      .respond(function() {
        return CAR_LIST;
      });

  })
  .constant('CAR_LIST', {
    'cars': [{
        'imageUrl': '/images/1.jpg',
        'model': 'Lorem',
        'year': 1997,
        'brand': 'Fhourd',
        'price': 50000
    }, {
        'imageUrl': '/images/2.jpg',
        'model': 'Ipsum',
        'year': 1990,
        'brand': 'Banz',
        'price': 35000
    }, {
        'imageUrl': '/images/3.jpg',
        'model': 'Dolor',
        'year': 2000,
        'brand': 'Maxi-Cooper',
        'price': 28000
    }, {
        'imageUrl': '/images/4.jpg',
        'model': 'Sit',
        'year': 2014,
        'brand': 'Maxi-Cooper',
        'price': 15000
    }, {
        'imageUrl': '/images/5.jpg',
        'model': 'Amet',
        'year': 2015,
        'brand': 'ChevroleBrand',
        'price': 29000
    }, {
        'imageUrl': '/images/6.jpg',
        'model': 'Consectetur',
        'year': 2015,
        'brand': 'Banz',
        'price': 34500
    }, {
        'imageUrl': '/images/7.jpg',
        'model': 'Adipisicing',
        'year': 2009,
        'brand': 'ChevroleBrand',
        'price': 58000
    }, {
        'imageUrl': '/images/8.jpg',
        'model': 'Elit',
        'year': 2009,
        'brand': 'Banz',
        'price': 49000
    }, {
        'imageUrl': '/images/9.jpg',
        'model': 'Ratione',
        'year': 2010,
        'brand': 'Banz',
        'price': 28900
    }, {
        'imageUrl': '/images/10.jpg',
        'model': 'Laboriosam',
        'year': 1998,
        'brand': 'Fhourd',
        'price': 60000
    }, {
        'imageUrl': '/images/11.jpg',
        'model': 'Vero',
        'year': 1987,
        'brand': 'Fhourd',
        'price': 25000
    }, {
        'imageUrl': '/images/12.jpg',
        'model': 'Accusantium',
        'year': 2015,
        'brand': 'Maxi-Cooper',
        'price': 29000
    }, {
        'imageUrl': '/images/13.jpg',
        'model': 'Perferendis',
        'year': 2013,
        'brand': 'Nenault',
        'price': 20000
    }, {
        'imageUrl': '/images/14.jpg',
        'model': 'Autem',
        'year': 2012,
        'brand': 'Banz',
        'price': 33000
    }, {
        'imageUrl': '/images/15.jpg',
        'model': 'Minima',
        'year': 2014,
        'brand': 'Nenault',
        'price': 90000
    }, {
        'imageUrl': '/images/16.jpg',
        'model': 'Aperiam',
        'year': 2015,
        'brand': 'Nenault',
        'price': 84100
    }, {
        'imageUrl': '/images/17.jpg',
        'model': 'Quas',
        'year': 2015,
        'brand': 'Nenault',
        'price': 85000
    }, {
        'imageUrl': '/images/18.jpg',
        'model': 'Debitis',
        'year': 2015,
        'brand': 'Nenault',
        'price': 78000
    }, {
        'imageUrl': '/images/19.jpg',
        'model': 'Reprehenderit',
        'year': 2015,
        'brand': 'Banz',
        'price': 90000
    }
  ]
  });
