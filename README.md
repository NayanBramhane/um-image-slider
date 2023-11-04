# Image Slider

This Image Slider is made using ReactJS and Vite.

## Requirements

- NodeJS v18.17.1
- npm 10.1.0

## How to run

- clone this repo

```shell
cd image slider
npm install
npm start
```

### Note

- You can set duration for auto-slide in 'App.jsx' by changing the attribute 'autoSlideInterval' in milliseconds.

3000 milliseconds = 3 seconds.

- You can also remove auto-slide functionality by removing 'autoSlideInterval' attribute and reload browser to see changes.

- If you want auto-slide back, replace <ImageSlider .../> component in 'App.jsx' with <ImageSlider sliderImages={sliderImages} autoSlideInterval={3000} />.