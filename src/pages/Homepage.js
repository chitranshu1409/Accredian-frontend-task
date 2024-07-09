import React from 'react'
import Navbar from '../components/Navbar'
import Landingpage from '../components/Landingpage';
// import Cards from '../components/Cards';
const items = [
    {
      name: "Refer",
      color: "#f44336",
      href: "refer"
    },
    {
      name: "Benefits",
      color: "#e91e63",
      href: "benefit"
    },
    {
      name: "FAQs",
      color: "#9c27b0",
      href: "#"
    },
    {
      name: "Support",
      color: "#673ab7",
      href: "#"
    },
    
  ];
  
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
]
const Homepage = () => {
  return (
    <>
    <Navbar items={items} />
    <Landingpage/>
    {/* <Cards posts={posts}/> */}
    </>
  )
}

export default Homepage