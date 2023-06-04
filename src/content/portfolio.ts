const portfolio: Array<{
  info: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  video:string
  variant?: "flat" | "reverse" | "normal";
}> = [
  {
    info: "PUBLIC SPACES",
    title: "The Color Bath",
    text: "Multimedia content infusing color at Shinjuku station",
    image:
      "https://images.prismic.io/jant/f61d8c7c-0666-4604-afd7-65b68204ffe9_SJK_CS_FRAME.jpg?auto:compress,format",
      video:"https://patrickheng.com/jant/SJK_CS_VIDEO.mp4",
    alt: "Shinjuku Thumbnail",
  },
  {
    info: "STYLEFRAMES",
    title: "Flowers studies",
    text: "A digital tribute to botanical art",
    image:
      "https://images.prismic.io/jant/fbaac30a-8f58-46ca-a4ce-79324c01f403_FLW_CS_FRAME_00000.jpg?auto:compress,format",
      video:"https://patrickheng.com/jant/FLW_CS_VIDEO.mp4",
    alt: "Flowers Thumbnail",
    variant: "reverse",
  },
  {
    info: "INSTALLATION",
    title: "Perplexiplex",
    text: "An interactive immersion through a surreal forest",
    image:
      "https://images.prismic.io/jant/3ad2a0e0-28f3-40e7-be9f-1e2f5ed6ea9f_PLX_CS_FRAME.jpg",
      video:"https://patrickheng.com/jant/PLX_CS_VIDEO.mp4",
    alt: "Perplexiplex Thumbnail",
    variant: "flat",
  },
  {
    info: "LIVE SHOW",
    title: "Godspeed",
    text: "A/V performance for the Nuits Sonores festival",
    image:
      "https://images.prismic.io/jant/3a61f0e7-ecf6-4b34-be9e-3f24fcc784a6_GSP_CS_VIDEO_FRAME_00000.jpg?auto=compress,format",
      video:"https://patrickheng.com/jant/GSP_CS_VIDEO.mp4",
    alt: "Godspeed Thumbnail",
  },
  {
    info: "STYLEFRAMES",
    title: "Spectral caustics",
    text: "Experiments with glass shaders and light play",
    image:
      "https://images.prismic.io/jant/2415b795-29aa-4c9b-add1-f6f1d4d0d461_CST_CS_VIDEO_FRAME.jpg?auto=compress,format",
      video:"https://patrickheng.com/jant/CST_CS_VIDEO.mp4",
    alt: "Spectral caustics Thumbnail",
    variant: "reverse",
  },
  {
    info: "ANIMATIONS",
    title: "Explorations",
    text: "Research and development done at Moment Factory",
    image:
      "https://images.prismic.io/jant/a133315e-8f14-4fbd-807e-fc205a2e01b6_RND_CS_VIDEO_FRAME+%2800000%29.jpg?auto=compress,format",
      video:"https://patrickheng.com/jant/RND_CS_VIDEO.mp4",
    alt: "Explorations Thumbnail",
    variant: "flat",
  },
    {
    info: "STYLEFRAMES",
    title: "Mechanical wizardry",
    text: "Astronomical table clock inspired by objects from the wizarding world",
    image:
    "https://images.prismic.io/jant/3b4e58fd-01f6-4afc-941c-89819913f21c_MCN_CS_VIDEO_FRAME_00000.jpg?auto=compress,format",
    video:"https://patrickheng.com/jant/MCN_CS_VIDEO.mp4",
    alt: "Mechanical wizardry Thumbnail",
    },

];

export default portfolio;
