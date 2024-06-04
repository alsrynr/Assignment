const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}

arr.map((item)=>{
    if (userDetails[item]){
      return item +' '+ userDetails[item]
    }
   }).filter(item=>item)



// expected output :
// ['kaylin khanal', 'gopal tharu']