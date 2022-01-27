const server = "https://testnet-algorand.api.purestake.io/ps2";
const token = {
    "X-API-Key": "z6H94GE3sI8w100S7MyY92YMK5WIPAmD6YksRDsC"
}
const port = "";
const algodclient = new algosdk.Algodv2(token, server, port);

const CHOICE_ASSET_ID = 21364625;

const algoSignerConnect = async () => {
    try {
      if (typeof window.AlgoSigner === "undefined") {
        window.open(
          "https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm",
          "_blank"
        );
      } else {
        await window.AlgoSigner.connect({
          ledger: "TestNet",
        });
        const accounts = await window.AlgoSigner.accounts({
          ledger: "TestNet",
        });
         console.log(accounts);
        if(accounts) {
            dropdownModal.style.display = 'none';
            success.textContent = "Algosigner Wallet successfully connected";
             success.classList.add("success_show");
             setTimeout(() => {
                 success.classList.remove("success_show");
             }, 1200)
             responses = accounts[0].address

        } else {
            err.textContent= "Error Connecting to Algosigner 📵 "
            err.classList.add("error_show")
            setTimeout(() => {
                err.classList.remove("error_show")
            }, 2000)
            console.log(error);
        }

      }
    } catch (error) {
        
        err.textContent= "Algosigner is not set up yet 📵 "
        err.classList.add("error_show")
        setTimeout(() => {
            err.classList.remove("error_show")
        }, 2000)
        console.log(error);
    
    }
  };