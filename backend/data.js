import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Demo',
      email: 'demo@gmail.com',
      password: bcrypt.hashSync('password', 8),
    },
    {
      name: 'Test',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('password', 8),
    },
  ],
  products: [
    {
      name: 'Fluffy Chair',
      slug: 'fluffy-chair',
      category: 'Chairs',
      image: '/images/chair1.jpeg',
      price: 126,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Leather Chair',
      slug: 'leather-chair',
      category: 'Chairs',
      image: '/images/chair2.jpeg',
      price: 725,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Pointy Chair',
      slug: 'pointy-chair',
      category: 'Chairs',
      image: '/images/chair3.jpeg',
      price: 279,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Flat Chair',
      slug: 'flat-chair',
      category: 'Chairs',
      image: '/images/chair4.jpeg',
      price: 112,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Thin Chair',
      slug: 'thin-chair',
      category: 'Chairs',
      image: '/images/chair5.jpeg',
      price: 806,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Bamboo Dresser',
      slug: 'bamboo-dresser',
      category: 'Dressers',
      image: '/images/dresser1.jpeg',
      price: 83,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Branch Dresser',
      slug: 'branch-dresser',
      category: 'Dressers',
      image: '/images/dresser2.jpeg',
      price: 349,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Long Dresser',
      slug: 'long-dresser',
      category: 'Dressers',
      image: '/images/dresser3.jpeg',
      price: 76,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Oval Dresser',
      slug: 'oval-dresser',
      category: 'Dressers',
      image: '/images/dresser4.jpeg',
      price: 875,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Chocolate Sofa',
      slug: 'chocolate-sofa',
      category: 'Sofas',
      image: '/images/sofa1.jpeg',
      price: 575,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Cloud Sofa',
      slug: 'cloud-sofa',
      category: 'Sofas',
      image: '/images/sofa2.jpeg',
      price: 50,
      inventory: 391,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Sheep Sofa',
      slug: 'sheep-sofa',
      category: 'Sofas',
      image: '/images/sofa3.jpeg',
      price: 692,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Vanilla Sofa',
      slug: 'vanilla-sofa',
      category: 'Sofas',
      image: '/images/sofa4.jpeg',
      price: 858,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Simple Sofa',
      slug: 'simple-sofa',
      category: 'Sofas',
      image: '/images/sofa5.jpeg',
      price: 50,
      inventory: 886,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Glass Table',
      slug: 'glass-table',
      category: 'Tables',
      image: '/images/table1.jpeg',
      price: 632,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Wood Table',
      slug: 'wood-table',
      category: 'Tables',
      image: '/images/table2.jpeg',
      price: 153,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Thin Table',
      slug: 'thin-table',
      category: 'Tables',
      image: '/images/table3.jpeg',
      price: 214,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Speckled Table',
      slug: 'speckled-table',
      category: 'Tables',
      image: '/images/table4.jpeg',
      price: 637,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
    {
      name: 'Light Table',
      slug: 'light-table',
      category: 'Tables',
      image: '/images/table5.jpeg',
      price: 199,
      inventory: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris a diam maecenas sed enim ut. Est ultricies integer quis auctor.',
    },
  ],
};

export default data;
