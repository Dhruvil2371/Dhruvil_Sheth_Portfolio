import { TypeAnimation } from 'react-type-animation';
import classes from './Animation.module.css'

const Animation = (props) => {
  

  console.log(props)
  return (
    <div className={props.dark ? classes.dark_anim : classes.anim}
    id={props.dark ? 'dark' : 'light'}>
    <TypeAnimation
    
      sequence={[
        'Front-End Developer', // Types 'One'
        1000, // Waits 1s
        '', // Deletes 'One' and types 'Two'
        1000 // Waits 2s
        // () => {
        //   console.log('Done typing!'); // Place optional callbacks anywhere in the array
        // }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={props.dark ? { color: 'white' } : {}}
    />
    </div>
  );
};

export default Animation