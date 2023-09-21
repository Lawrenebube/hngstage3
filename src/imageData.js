import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const images = [
    {
      id: 1,
      url: require('./assets/drinks/pexels-anete-lusina-6331200.jpg'),
      tags: ['drinks', 'orange','fruits'],
    },
    {
      id: 2,
      url: require('./assets/food/pexels-avery-arwood-18399738.jpg'),
      tags: ['food', 'tag4'],
    },
    {
        id: 3,
        url: require('./assets/people/pexels-alina-chernii-18355492.jpg'),
        tags: ['people', 'tag4'],
      },
      {
        id: 4,
        url: require('./assets/plants/pexels-alex-staudinger-1732411.jpg'),
        tags: ['plants', 'green'],
      },
      {
        id: 5,
        url: require('./assets/drinks/pexels-cottonbro-studio-4790062.jpg'),
        tags: ['drinks', 'tag4'],
      },
      {
        id: 6,
        url: require('./assets/food/pexels-esranur-kalay-14680537.jpg'),
        tags: ['food', 'tag4'],
      },
      {
        id: 7,
        url: require('./assets/people/pexels-davi-pimentel-2064826.jpg'),
        tags: ['people', 'tag4'],
      },
      {
        id: 8,
        url: require('./assets/plants/pexels-ava-neva-18298349.jpg'),
        tags: ['plants', 'green'],
      },
      {
        id: 9,
        url: require('./assets/drinks/pexels-helena-lopes-1796698.jpg'),
        tags: ['drinks', 'tag4'],
      },
      {
        id: 10,
        url: require('./assets/food/pexels-georgie-devlin-16369771.jpg'),
        tags: ['food', 'tag4'],
      },
      {
        id: 11,
        url: require('./assets/people/pexels-iyke-ibeh-17832815.jpg'),
        tags: ['people', 'tag4'],
      },
      {
        id: 12,
        url: require('./assets/plants/pexels-cecília-o-tommasini-904621.jpg'),
        tags: ['plants', 'green'],
      },
      {
        id: 13,
        url: require('./assets/drinks/pexels-jill-burrow-5987168.jpg'),
        tags: ['drinks', 'tag4'],
      },
      {
        id: 14,
        url: require('./assets/food/pexels-jane-doan-1099680.jpg'),
        tags: ['food', 'tag4'],
      },
      {
        id: 15,
        url: require('./assets/people/pexels-jimmy-jimmy-1484806.jpg'),
        tags: ['people', 'tag4'],
      },
      {
        id: 16,
        url: require('./assets/plants/pexels-emma-bauso-2253844.jpg'),
        tags: ['plants', 'drinks'],
      },
      {
        id: 17,
        url: require('./assets/drinks/pexels-kseniia-lopyreva-4959844.jpg'),
        tags: ['drinks', 'liquid'],
      },
      {
        id: 18,
        url: require('./assets/food/pexels-nina-zeynep-güler-🦕-15954140.jpg'),
        tags: ['food', 'tag4'],
      },
      {
        id: 19,
        url: require('./assets/people/pexels-narishsltnv-18226128.jpg'),
        tags: ['people', 'tag4'],
      },
      {
        id: 20,
        url: require('./assets/plants/pexels-ricky-esquivel-2560900.jpg'),
        tags: ['plants', 'green'],
      },
      {
        id: 21,
        url: require('./assets/drinks/pexels-suhairy-tri-yadhi-2477379.jpg'),
        tags: ['drinks', 'liquid'],
      },
      {
        id: 22,
        url: require('./assets/food/pexels-sevil-yeva-18007566.jpg'),
        tags: ['food', 'fruit'],
      },
      {
        id: 23,
        url: require('./assets/people/pexels-ogo-1486213.jpg'),
        tags: ['people', 'braids'],
      },
      {
        id: 24,
        url: require('./assets/plants/pexels-travel-suisse-2316571.jpg'),
        tags: ['plants', 'green'],
      },
      {
        id: 25,
        url: require('./assets/food/pexels-spencer-davis-4393021.jpg'),
        tags: ['food', 'egg'],
      },
      {
        id: 26,
        url: require('./assets/people/pexels-yaroslav-shuraev-9632848.jpg'),
        tags: ['people', 'skate'],
      },
      {
        id: 27,
        url: require('./assets/plants/pexels-vasanth-babu-797793.jpg'),
        tags: ['plants', 'green','leaves'],
      }
      
  ];
  
  export default images;
  