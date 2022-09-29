import React from "react";
import classes from "./Projects.module.css";

const Projects = (props) => {
  return (<div id="projects" className={props.dark ? classes.dark_projects : classes.projects}>
    <h1>Projects</h1>
    <React.Fragment>
    <div className={classes.wrapper}>
         <figure className={classes.picture} >
            <img src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="hi"  />
            <figcaption>My-Portfolio website</figcaption> 
            </figure>  
            <figure className={classes.picture} >
            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRDw8PDxIPDw8PDw8PEA8PEREQDw8PGBQZGRgUGBgcIS4lHB4rIxgYJjgmKzA1NTVDGjFCQDtAPy42NTEBDAwMEA8QGBESHjErJSQxMTE0NDQ0NDYxNTQxNjQ0NDE0NDQ0NDQ0NjQ0NDE0MTQ0NDQ0NDQ0NDQ0MTE0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EADoQAAICAQMCBAQDBQYHAAAAAAECAAMRBBIhEzEFQVFhBiJxkTJCgRQjUqGxFWKSotHhNFNydJOywf/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACMRAQADAQACAgMAAwEAAAAAAAABERICAyFBUQQTMWFxgSL/2gAMAwEAAhEDEQA/AAiuTpxzpydOfY08FEzXMNXHjXKNctKnNauBeqdRq4J6o2MuU9UA9c6j1QL1R0MuW9cG1c6L1QLVy0sueUmSkcZJhkjayV2Sts7Oo8MrqUi69a7wm/oCt32EruVXccKxBHABxnnzxfi3gdumezdXYaUfYL2rZEf0bzwDg45mf2QcS42yTpzp2eE6hNgei5TawRA1bgu55CgY78jjvK1Hhd9ZRbKbkaw7UVkYM7ZA2qMcnkcd+Zbj7GJcwpK2Tu2eBWV1q9y2UszXqEepiStdBs3DHOCQVJxhcEk4Bi39k39PrdG3pbQ/U2NsCHs2cdj6+ctx9nEuXsmlSdO3wm9CivRcjWNtRWRwXbj5QMcnkcd+Y4nw7qDWzdK7qLZWhp6bbwjo53n0GU28jzlvmPlYlxErh0rjC6Vg5QqwcMVKEEMrDuCD2IjLaVkIDqVz2946GSyVwyVwyVwy1x0sgqk2Ehwk104aOS+2UVjBSZKy0aAxIBClZWI6VMgTQEgE0BDSpMSTUktKnc2Stkb2Sts8+nWihSZNccKTJSVqibVwTVx81wbJHSpz3rgHqnTZIF646GXKeuAeudV64u9cdCnMeuBerII9eJ0nrgWrjaoXxda9Q9upS6tGtU2NQ63C1bSvzIpVSrAtnB3DvziG1errs1PiLl2NeoUIrBW3OBqKGAAI4IVGxux2xETXJ05nMemneo1WlpZNjadUXxDT3r0E1RcadBaN1jOMlvnXgD1/Tn+C6uupEDsysNUXJVWZkDad6zb7kMyn1O2JCuTpyzFT/lfToUPVTQlRuSwj+0WPSS7YvV0TVIAWReS2M8cZGfPD+sorJsrLV9VadIPEVHW6uynphwmV2Agqvnzt474PA6cas1dzoK2ttZBgbGd2TA7DBPl5ekzPHu7UfynUo1WmqNARtOqp4jRqD+zpqiBQocb3awZZ+RkD/YcdGH7G9RJNj6mq0qcncorsBYnsTlh78zASFWuMcxAk3qb0bVPapLI4QbwCrZ2KCeee4MrUMrAKhdvm3Fn8uMYEEiQyJH1FINK4RUhlSbCR0sgiuQpGNkorLSosUmGWMssEwlpUXKzOIZhMERtUxiWBNBZsLK1TGJIXbLlo09LslbYcrKKzy6dKAKSisOVmSstKgCkwUjBWYKx0qLMkE6RwrBMsdCiTpF3rnQdIF0jHSpznrgmrj7pBMk1oZImuVsjZSVtlpUWFeSAASSQAAMkn0nrPCvgeyxQ+ofoA8itQGsx/ePYH25jHwV4OTe99yOoqVemHRlDO2fmGe+AP8097OHl80xNcunPEf2Xi7/gCkr+7vuVvIuEdfsAP6zyPi3g1ukcLcow2Srryjgeh9fYz7FOd454aup070tjJ5Rj+WwfhP/w+xM58ebqJ9/wzxHw+QBZtROj4p4FqNKN9yfJkDqVnegPofMfqBOaGnrjqJ9w55FUQyCAVoRWjYowsIIBWhA0LNCTJk3TJaFqmWgmhGMGxjayGRK2zcsCWllkJCKk0qwyJDRyF05IzskhpZd6ViZDybpwtulkSiJeZRMrVMkTJE2ZmVqgyswywxmGEdGizrAuI04gHEY6VFnECwh3gXmrVBkT2vwZ4WgqGqdQ1jswQkZ2IpK8ehJB5niWM9h8HeN1rWNLayoyMTWWIVWVjnGT+bJP1zMeSZnn0oh7OSVLnmaVA6nUJWAXYKGZUXPdnY4VQPMkwPiXiFenr6lhOCQqoo3WWufwoi/mY+k81pxZqPE6ev+PTVtqGpVt1el3DbXVkficgl2b2AHA5Yj5T1t1KurI6hkYFWU8gg9xPi2vr6V91QORVbZWD5kKxAP8AKfU/HviCjR1szsptwenQCOo58sjyX1J/rxPj1uoZ3d3OXd2dz6sxyT9zO/giYuWejCvCq8RV4RXnexR9XhBZEVsmw8LVHt8ovFOpKNkDRkvMl4sbZnqyVGw02piQshUslao8hh0MQSyHSyEyqOZkgerJC1TpLdNi2cddRCrqJzNOr1JfUnNXUTQvkqP9STdEevL68lR3dMlor1pOrA0O5gHlGyDZ42qYeAcwrtF3MYk0E7Rax4WwxWxpqJVOoPDVCJUSG1mo2uiB1SvTU43l7W7ZKgnb5Dk84EwdJpizWdR/2TTBUtuyA+rvOTspT8oPqewGTOHYYuzSqfsU9N8OeOaXSWNc2mtuvZmFQDKwqUnAVM8ljnG77dzn0fxXpfDtOp1Gppd9ZqPnFA1Fu5nPfJDYVR2yOOMCeA8I1yae4ah0FjUjdRWfwtf+V2/ur+LA5JA9yFtbrrL7WuvdrLHOWdv5ADyA8gOBCeb6tUouMkgBQSTtXOB7DJJ+8geAzNAzpYocNCK8XBmg0LNGg811IrvkLytUaNkybYqXg2siqNm6Z60TNkz1JKj4uhUunNV4VHgqdRLYwls5aPGUeZmWqdDqSRTfJC1SC+bXUTnGyV1JKnWXUzQ1M5AumutKhTrftUsaqcjryv2iVJ2hqpoamcQaibGohRdoaiX15x11EIt8qUQ6Rtg3eKC6V1YNUK7RWwzTPBO0bVHPB/D69RcqW2ipWtrqCqN9zu7YARewA7ljwPcnE52i0ZvtWsMqDDu9jZKV1IpZ3OPIKpOPPt5x/wCH/wDj9F/3VH/uJv4ZsK6i1VCNZbptRVSlgVka8rlFIbg5K4APBJA84a/opydadNgDTftJYN8z3NXtdcdwiDKHOOCxjeot0h0aIiAakCvJ2OHDhn6jM5bayEbNqgZGPu/qjfZotQ2vV96W0LpWur6dgcluoinAJXYMlewIHaefCRtZDAliE2S9kdHLEmZrErEtLKsyi01iZKy0sssYMmFKzJSWlkGQCF6c0ElpZDUQqCWqQ6pCejlaCMJMIkOiwno5akmsSTNmnOeCLQriBYTUSMq3SbpWJREbGULyjZIRMERtnLfUliyBMqVqjS2Qq2xIGEDQlqIOLbNCyJhpsNBqjW+UWgQ00DCZNNgkEEEgg5BBwQfWZ2ztazR10GtinWRkZDuexC9mxG3jgZUbwRjIPYnzPNRJnSiLZsZ3ILu7kDALszkD0GewlCqdbw/RB1tZkdlRGO9SQEba2wYwdxLAcegJ9w1qNIlRAapw70tlHdv3VhY7WyAMkDGV7ZP6DM9qvhwelIap0+hKNENtZcs1TJrnTaiYNMtrLndOV050DVKNUdLJDpyunHjXMlJaGSfTliuNbZNstKgFrhFSE2yStUirCCYzJvlaoTMkFvkkaKuINljBWYKSs0XKyisOUmSsdDIBWZKRkrMlI6GSxSVsjPTldOOlkvsmgsP05OnDRyCBNgQoSNaCtOom9QyfNlWYIPwnBJJHY4OMjOMZ5hPRyUVYRFnd0/h+k3nfZ+7BU7kcLv5JbCEFlUY29yfmB7ZItNHpdm4s4YKuUS2tvmCru5x5tvHAOMA9iJmelDlICcZycDAyc4HoIzWk6f7JpgrFHZz0yQHdB85R8EADJ+bYNvBHnkQ1CUMqhlCNhcsjNkHFm7IbOeydsd5z66ME6UI7EjPfBIzGQhPck/Ukx6vS0jALkthjlXXZn5cLnHnk8+WI29FA5DMfZXTAO4DGSM9uc9jOc9NenKFUo1TsNTTkAE5A/jADHL8E4wCMLz2/rIdPp/8AmOfYbVP3Ix2P+U+0zcn04TVQbVzq6iusIShO4PtAZlO5MfiAAz39fXziLx0aJskGyRpoBzNR0KAZYNhCuYJzNxLNMGZJlM0GzTUCmi0ovBM8EzzUIcvMl4AvMF40DHUkiu+XGg6W2TbDKs1tnn27ZKlJgpGzXMFIx0sltsrbGNksJHYouEmhXGRXNpVn0/U4hs5KCqWKo8KPp9xNCn6fcTOzkiKptao4Kfp9xNCr6fcQntZKLXCKkZFf0+4lhPcfcTM9tZDRIwglBPcfcTaj3H3EzPSyYSHVoop9x9xNbvcfcTJo0bJhnizP7j7iDZ/cfcRiBI7vAO8E7+4+4gWf3H3E1HLMyK7wDvMM/uv3EEze6/cTcQJW7wTNI31X7iDLTcMoxgWM2xg2moFMsYJjNtBkTcSqYYzJM0RMERiRSt0kqSaVPTKs2FmlSECT5k9vXHIJSYNca2yjXD9iyV6csVxnpywkf2HAASbVIYJNBJmfIY4VRpXffsG7YhdgO+0EA4Hn3EYbwq4MV6bkhmX5RuBIODgj3BH6Saa9623VsUYjGQAeMg45+ghW1tuBluCQc7EG4q24c45wcn9Yx3HyJ46v1RDbJthDKMNt5GfQWDZtXfuAK7Pn9OOPPkReysqxVgVYcEHuIzTrrVwqMeNpXCIzLtORjIyPKL3WF2Z2OWY5JwBk/QTU9R8MRzPyHD6bTPZnYNxXuMgH8LN/RD/IecXM3TqXrJKEqSFGRjsGVh39wD+ko6j5M8TXo2PDby2zpt+Ybj+AbTg8/Wc8vG38VvG3LnsxXeiHu2dwyvr2Pl5TmsZu4+GIjr5EayMN4faUDoFsBCHFbB2AbfgkD/ob7TnO01XrrVxsZhsAwQqnYAHAPb0sf/F7DHTmmO4n4ZuLKcMCpIDAHg4PYwDWSarVPY+9yC2FX5VRAFAwAAoAEWLTcQxUnNNU1rrWmC7ByMnAwqlj/JTJqdNZWFZ1KhyQufzAAHcPYhgR9YrVeyNuRirbXXI77WUq38mI/Wau1NjAK7E7SCAQAQdiIPL+FEH6TQqbVukzBZl5kabzMmTMows0oiDIhTMkRjpZBImSIYiZKx0Mg4khdskdrL1apNhZsCaAnwJ8z6WA9sm2FxJiH7lgHZL2wmJJftOGAsvE1JH9jUcO/wDDvgfW232EdJW4rIybMevoM/fE9lqNMliGt1DIwwVxxifPfD/F7qBsR9qE5IK79ue5AP8ATMeu+JrsfIxLZ/MiYA59O55A/QnzwPd4fyPFzxUx7+XzvP8Ai+bvu4mK+P8ABDx3wr9lsVA29XBKkjDDBwQf5c+8T0GjbUXJSpAZieT2UAEk/YS9drbL232tubG0cABV9AB2gaL2rcWVkq6ng+84z3xPdx/Ht58fceOpn/1X/LfSPBvC00tQQYZzy9mMF2/0HYCcb4n8DSwW6ishbK0LWKANr4BPPo2PPz4+s5bfFNw7OzHIGOnWueRnnnHY+R/EPTlfxfxksHppZhXZzdyCHcgAqrbQxXjGT+L6d/Z15vHPNQ+fx+N548lzPuXCM9f8LfDwPT1dxVlKlq6iucEn5WJ7dsnGPMHynkCZ1fDviHUUqtSuOmMhQQDtznHJGcZ/2nHxd8x1fT1/keLydcVxL6F4n4cmppamwcMPlbA3I3kw9CJ8t8d8NOlvNJYOAqsrYwSp7ZHkeD9p27vivUBSVsQnsBhTyT3/AAjjCt/iX3nmtbqnudrbWLO34mOB7AYHAHtO/k8nHX8/rz/j+DycXqfQ3gvhDay/oowTCs7OQSAoIHA8zkjifV/CvDq9NSlNYACgZIGC7Y5Y+pM+P6HX26ewW0sUcArnAIZT3BB4I4H2nVb42138df8A4lm/H3zEe2fP4PJ1Pr+On8c/C6IluuoIQBlNlO0bDuYKWXHY5IJH1nz9p3PFviPVapOldYDXkMVRFUMR23Y5OPScMianqJn0fH4++ea6d/4Q8GTV39K0p02RrGCsOuNjKMLg5UHfzkHIz54I7nxx8N1UIt1BVTc61OL3JxtUsCjMeCdmD3zxjHOfGaLWvQ2+khLRjbYBl0x3C5457HjkcdicueMeN3apj1mNqDbs3qitWRjJXaABnkH1GPQYdRTHXj73ExPpyhNCViWJmenbK8SYliaxMz0Y4YxJtm8S8TG2sBbZNsLtk2y/YcBbZIbbJL9iw9GDNbovvk3z4eJe/wBGN0m6L75N8sSrgfdK3QG+UXmo4lXBjdK3RY2SjZNRxKuD9VYZScsMFQAFySSQABzye5A89phBo8nAdSSyhe+Cps2Bs9sZzOcuqZRhWZRnOFZlGfXjzmG1LE7izFuPmLHPHI5nXnmI/sMTq/UmLflJXv2IPy8qQCDwSOQR2MwpyQOeSB8o3Hv5DzPtFnvJJLEsTySTkk+5mRcQQVJUg5BBIIPqDNxz7bv06tmiwC29SFBLttO1V+cDJBPO6srgeZGMwF1AVXIYMa7jUwwB/Fhu+cfL5jz7xF9U7AhndgTkhnYgn1x+g+0w+pYjaWYrkttLEruPc49eT950zH0xGvmRi8Z0ml6m35wgZnUk8BQqhskkgc5x3/0nLNkiaplIKMyEZIKsVIJGDjHtNc8/a7m49S6Z0XzIrOFZrK62BR8qzruXP9MeR74nNLwTahs53NncGzk53fxfX3gi86V9MX9ya06b3RMsN5xlV3kfpkf14h08ODFP3ihXZUDMhwWZwilQDkq3zkHjOxu3ec1NQyHcjMjDOGRirDIweRJZq7GxussbaQV3Ox2kdiMnidOXPq5n1I2p0pRKnJBFihuCpCZAYKcHOcEHkDvxmJky3uYqqlmKpnYpJKpk5OB5QZeahj/boU6AOiEWYd0sZKyqK7srIAE3ONwO5ue/7tgAcQ1Xgzu4RHDkdYOVRzsZCoK/3sswAx9fI45q620AAW2gBSoAscAL/CBngcDj2geoeOTwSRyeCe5E25zE/YgMsNAbpe6ZmG7gcNNhosHmg8xMS1EwYDS90X3y98xMSdQYzJui++TfCpWoMbpIvvlQzK1Dvy5JJ53dJky5JJmVJJJKMyZJJpMmYMkk1CZMyZJJqAwZky5JsMGYMkkYEsNMmVJNwxKjMmSSbYlRmTLkjAlgyGSSahzlUkkkUuQSSTMpckkkxKakkkgmZJJJJ//Z' alt="hi"  />
            <figcaption>Weather app</figcaption>  
            </figure>  
            <figure className={classes.picture} >
            <img src='https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?size=626&ext=jpg&ga=GA1.2.69569339.1664302468' alt="hi"  />
            <figcaption>Realtime chat app</figcaption>    
                
        </figure>
        </div>
        </React.Fragment>
  </div>
  )
};

export default Projects;
