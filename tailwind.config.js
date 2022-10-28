module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
        screens: {
          'xs': '400px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        container: {
          screens: {
             sm: "100%",
             md: "100%",
             lg: "1024px",
             xl: "1280px",
             /* '2xl': "1536px", */
          }
        },
        extend: {
          gridTemplateColumns:{
            'max-content' : 'max-content'
          },
          colors: {
            "primary-color": 'var(--color-primary)',
            "primary-hover": 'var(--color-primary-hover)',
            "primary-rgba": 'var(--color-primary-rgba)',
            "secondary-color": 'var(--color-secondary)',
            "overlay": "rgba(0,0,0, .33)",
            "body": "var(--color-body-bg)",
            "txt": 'var(--color-txt)',
            "icon": 'rgba(255,255,255,.55)',
            "gray-rgba": 'rgba(255 255 255 / 15%)',
            "facebook": '#1877f2',
            "twitter": '#1da1f2',
            "youtube": '#ff0000',
            "google": '#ea4335',
            "star": 'rgba(252,204,0,.7)',
          },
          backgroundImage:{
            "instagram": 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
          },
          boxShadow:{
            'custom-1': '0 0.1rem 0.15rem rgba(40, 36, 89, 0.2), 0 0.25rem 0.4rem rgba(40, 36, 89, 0.15)',
            'custom-2': '0.125rem 0.1rem 0.15rem rgb(40 36 89 / 20%), 0.25rem 0.25rem 0.4rem rgb(40 36 89 / 15%)',
          },
          fontFamily: {
            poppins: ['Poppins', 'sans-serif',],
          },
        },
      },
      variants: {
      },
      plugins: [require('@tailwindcss/forms'),],
  };