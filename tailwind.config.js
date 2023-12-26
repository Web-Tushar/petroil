tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        headerbg: '#282828',
        sada: '#fff',
        primary: '#F40404'
      },
      maxWidth: {
        'container': '1144px',
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
      },
      backgroundImage: {
          'banner': "linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)), url('images/banner_solid_pic.jpg')",
          
          'slidone': "linear-gradient(rgba(196, 196, 196, 0.50),rgba(196, 196, 196, 0.50)), url('images/slide_one.jpg')",

          'slid_two': "linear-gradient(rgba(196, 196, 196, 0.50),rgba(196, 196, 196, 0.50)), url('images/slide_two.png')",

          'slid_three': "linear-gradient(rgba(196, 196, 196, 0.50),rgba(196, 196, 196, 0.50)), url('images/slide_three.png')",
          
      }
  }
}
}
