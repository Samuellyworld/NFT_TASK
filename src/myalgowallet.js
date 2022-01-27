const algodToken ="2f3203f21e738a1de6110eba6984f9d03e5a95d7a577b34616854064cf2c0e7b";
const algodServer = "https://academy-algod.dev.aws.algodev.network";
const algodPort = 443;

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);


//error modal 
const err = document.getElementById('error');

//success modal
const success = document.getElementById('success');


const ASSET_ID = 21364625; // choicr asset ID

var dropdownModal = document.getElementById('simpleModal'); //wallet dropdown modal


let respons; //respons
const myAlgoConnect = new MyAlgoConnect(); //initialize


/// connection to my algo wallet

const myAlgoWalletConnect = async () => {

    try {
        let response = await myAlgoConnect.connect();
        dropdownModal.style.display = 'none';
        console.log(response);
        if(response) {
             dropdownModal.style.display = 'none';
             success.textContent = "My AlgoWallet successfully connected";
             success.classList.add("success_show");
             setTimeout(() => {
                 success.classList.remove("success_show");
             }, 1000)


             respons = response[0].address

        
            }
        }
    catch (error){
        dropdownModal.style.display = 'none';
        err.textContent= "Error Connecting to My AlgoWallet 📃 "
        err.classList.add("error_show")
        setTimeout(() => {
            err.classList.remove("error_show")
        }, 2000)
        console.log(error);
    }
}

const createNFT = async () => {
    
    if(!respons) {
        err.textContent= "You need to connect your wallet to vote 📵"
        err.classList.add("error_show")
        setTimeout(() => {
            err.classList.remove("error_show")
        }, 1000)
       }
}