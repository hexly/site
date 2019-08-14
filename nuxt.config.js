module.exports = {
  head: {
    title: 'Hexly | Private SaaS for Startups',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hexly provides an all-in-one private SaaS solution for startups and entrepreneurs."
      },
      { hid: 'og:title', name: 'og:title', content: 'Hexly' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          "Hexly provides an all-in-one private SaaS solution for startups and entrepreneurs."
      },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: 'https://www.hexly.io/images/hexly_site.jpg'
      },
      { hid: 'og:image:type', name: 'og:image:type', content: 'image/jpeg' },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: "Hexly's logo - a capital H in a hexagon"
      },
      { hid: 'og:url', name: 'og:url', content: 'https://www.hexly.io' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700'
      },
      { rel: 'stylesheet', href: '/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ]
  },
  modules: [['@nuxtjs/google-analytics', { id: 'UA-141809305-1' }]]
}
