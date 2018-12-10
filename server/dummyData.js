import Location from './models/location';

export default function () {
  Location.count().exec((err, count) => {
    if (count > 2) {
      return;
    }

    const content1 = [
      {
        id: 1,
        image_title: 'The little mermaid',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Copenhagen_-_the_little_mermaid_statue_-_2013.jpg/800px-Copenhagen_-_the_little_mermaid_statue_-_2013.jpg',
      },
      {
        id: 2,
        image_title: 'The round tower',
        image_url: 'https://files.guidedanmark.org/files/382/304_Rundetaarn.jpg?qfix',
      },
      {
        id: 3,
        image_title: 'Chritiania',
        image_url: 'http://sermitsiaq.ag/files/styles/930x500/public/media/christiania.jpg?itok=OM19TO4X',
      },
    ];

    const content2 = [
      {
        id: 1,
        image_title: 'The little mermaid',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Copenhagen_-_the_little_mermaid_statue_-_2013.jpg/800px-Copenhagen_-_the_little_mermaid_statue_-_2013.jpg',
      },
      {
        id: 2,
        image_title: 'The round tower',
        image_url: 'https://files.guidedanmark.org/files/382/304_Rundetaarn.jpg?qfix',
      },
      {
        id: 3,
        image_title: 'Chritiania',
        image_url: 'http://sermitsiaq.ag/files/styles/930x500/public/media/christiania.jpg?itok=OM19TO4X',
      },
    ];

    const location1 = new Location({ author: 'Me', title: 'Hello CPH', lon: 12.5990655, lat: 55.6928992, slug: 'hello-cph', cuid: 'cikqgkv4q01ck7453ualdn3hd', images: content1 });
    const location2 = new Location({ name: 'Mini me', title: 'Lorem Ipsum', lon: 12.539542, lat: 55.706413, slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', images: content2 });

    Location.create([location1, location2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
