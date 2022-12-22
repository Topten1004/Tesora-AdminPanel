import { ethers } from 'ethers';

export const setCookie = (cname, cvalue) => {
    const d = new Date();
    d.setTime(d.getTime() + (60*60*1000));
    let expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
}
export const eraseCookie = (cname) => {
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    return ;
}

export const authorization = () => {
    return {
        headers: { Authorization: `Bearer ` + getCookie('access_token') }
    }
}

export const isAuthenticated = () => {
    if(getCookie('access_token')) {
        return true ;
    }
    return false ;
}

export const errorHandler = (err) => {
    try {
        if(err.response.status >= 400 && err.response.status < 500){
            console.log(err.response.data.message) ;
            return err.response.status + " " + err.response.data.message ;
        }
    } catch(error){
        console.log("error" , err);
        return "Server Side Error" ;
    }
}















export const setItem = (key, item) => {
    if(item) {
        window.localStorage.setItem(key, item);
    } else {
        window.localStorage.removeItem(key);
    }
}

export const removeItem = (key) => {
    if(key) return window.localStorage.removeItem(key) ;
}
export const getItem = (key) => {
    if(key) {
        return window.localStorage.getItem(key);
    }
}


// export const isAuthenticated = () => {
//     if(getItem('access_token')) {
//         return true ;
//     }
//     return false ;
// }

export const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider) ;
}

export const formatDBDate = (db_date) => {

    if(typeof db_date === "undefined") return ;

    let removeT_db_date = db_date.replace("T" , " ") ;

    let removeTail_db_date = removeT_db_date.replace(".000Z" , "") ;

    return removeTail_db_date.toString() ;
}


// export const isMetaMaskInstalled = () => {
//     return Boolean(window.ethereum && window.ethereum.isMetaMask) ;
// }
// export const sleep =  (milliseconds) => {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

// export const convertBalance = (balanceBigInt , decimal) => {
//     // console.log(Number(Number(balanceBigInt) / Math.pow(10  , Number(decimal)) ) ) ;
//     return Number(Number(balanceBigInt) / Math.pow(10  , Number(decimal)) ) ;


// }

// export const json2array = (json) => {
//     var result = [];
//     var keys = Object.keys(json);
    
//     keys.forEach( key => {
//         result.push(json[key]);
//     });

//     return result;
// }