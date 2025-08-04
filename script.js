const url = "https://api.github.com/users/";
const fetchProfile = async()=> {
    try {
        const res = await fetch(`${url}basantmahato`);
        const data = await res.json();
        console.log("data", data);
    } catch (error) {
        console.log({error});
    }
};

fetchProfile();