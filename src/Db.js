import yujiImg from '../src/assets/Yuji.svg';
import naogamiImg from '../src/assets/naomi.svg';
import gamaImg from '../src/assets/gama.svg';
import senjuImg from '../src/assets/senju.svg';
import  Woman from  '../src/assets/Yuji.svg'
import joepic from '../src/assets/JoePic.png'

import yujiPanImg from '../src/assets/Pancakes.svg';
import naogamiBuildiImg from '../src/assets/building.svg';
import gamaVoliImg from '../src/assets/volcano.svg';
import senjuIsliImg from '../src/assets/island.svg'
import moon      from  '../src/assets/blackmoon.svg'
import Morocco  from '../src/assets/morocco.svg'
import Chinese   from   '../src/assets/chinese.svg'
import Boat  from     '../src/assets/boat.svg'
import heartred  from  '../src/assets/heart.svg'
import  heartempty from  '../src/assets/heart (1).svg'
import  messagesicon from '../src/assets/messages-2.svg'
import  sendicon  from  '../src/assets/send-2.svg'
import flower from '../src/assets/flower.svg'
import brownhome from '../src/assets/brownhouse.svg'
import apartment from '../src/assets/balcony.svg'
import searock from '../src/assets/searock.svg'


export let people = [
  {
    id: 1,
    name: 'Yuji Itadori',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: yujiImg,
    postImg: yujiPanImg,
    follow : 'following' ,
    
  },
  {
    id: 2,
    name: 'Naogami Shinya',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: naogamiImg,
    postImg: naogamiBuildiImg,
    follow :` follow + `,

  },
  {    id: 3,
    name: 'Gama Oyabin',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: gamaImg,
    postImg: gamaVoliImg,
    follow : 'following' ,

  },
  {
    id: 4,
    name: 'Senju Hashirama',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: senjuImg,
    postImg: senjuIsliImg,
    follow :` follow +`,

  },
];
console.log(people);

// friends data
export const FriendsData = [
    {
      id: 1,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image:  moon,
      profile: Woman,
      statusbar: "Following",
      icon:heartred,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 2,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: Morocco,
      profile: Woman ,
      statusbar: "Follow +",
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 3,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: Chinese,
      profile: Woman,
      statusbar: "Following",
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 4,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: Boat,
      profile: Woman,
      statusbar: "Follow +",
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    ];
    console.log(FriendsData);  

// profile data
export const ProfileData = [
    {
      id: 1,
      title: "John Doe",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image:  flower,
      profile: joepic,
      icon:heartred,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 2,
      title: "John Doe",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: brownhome,
      profile: joepic ,
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    {
        id: 3,
        title: "John Doe",
        time:"8 mins ago",
        description:
          "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
        image: apartment,
        profile: joepic,
        icon:heartempty,icon2:messagesicon,icon3:sendicon,
      },
      {
        id: 4,
        title: "John Doe",
        time:"8 mins ago",
        description:
          "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
        image: searock,
        profile: joepic,
        icon:heartempty,icon2:messagesicon,icon3:sendicon,
      },
    ];

   
    // comment data
// export const comments = [
//   {
//     id: 1,
//     title: "Idris Santa",
//     time:"8 mins ago",
//     statusbar: "Follow +",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi.",
    
//     profile: Idris,
//     icon:heartred,icon2:messagesicon,icon3:sendicon,
//   },
//   {
//     id: 2,
//     title: "Elena Port",
//     time:"12 mins ago",
//     statusbar: "Following",
//     description:
//       "Lorem ipsum dolor sit amet consectetur.",
    
//     profile: Elena ,
//     icon:heartempty,icon2:messagesicon,icon3:sendicon,
//   },
//   {
//     id: 3,
//     title: "Cynthia Morgan",
//     time:"45 mins ago",
//     statusbar: "Follow +",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi maecenas blandit posuere at sit.",
//     profile: Cynthia,
//     icon:heartempty,icon2:messagesicon,icon3:sendicon,
//   },
// ]
//     console.log(comments);