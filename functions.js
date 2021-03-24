var confirmed = false;
let contract = null;
let userCheckpoint = null;
let userAvailableTron = 0;
let contractTronBalance = 0;
let url = 'https://DiGi-Tron.com?r=';
let percent = null;
let days = 21;
let selectedPlan = 1;
let compounded = false;
let address = null;
var alerted = false;
var currentPercentage = null;
var totalTronForCurrentPlan = null;
var connectCount = 0;
let maxTotalStaked = 1000000;
let maxAllowed = 50000;
let minAllowed = 200;
let userStaked = 0;
let potentialStaked = 0;
let withdrawn = 0;
let cutAndRunValue = 0;
let numberOfDeposits = 0;
let DepositArray = new Array();
let depsitArraySize = 0;
let digiTronReferrer = null;
let contractAddress = "TTLQNt6WPkxH1U2Csmwzdf1BALf8XPfFUB";
var userAvailable = null;
var contractBalance = null;
var userTotalStaked = null;
var userWithdrawn = null;
var cutAndRunThreshHold = null;
var totalDeposits = null;
var checkPoint = null;
var refferredByYouLvl1 = 0;
var refferredByYouLvl2 = 0;
var refferredByYouLvl3 = 0;
var referralBonusTotal = 0;
var referralBonusWithdrawn = 0;

const TronWeb = require('tronweb')



function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

async function connect() { //this will initialize the stake portion of the page



    if (!window.tronWeb) {
        const HttpProvider = TronWeb.providers.HttpProvider;
        const fullNode = new HttpProvider('https://api.trongrid.io');
        const solidityNode = new HttpProvider('https://api.trongrid.io');
        const eventServer = 'https://api.trongrid.io/';

        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
        );
        window.tronWeb = tronWeb;
        console.log('tronweb object is ok '+tronWeb)


    }



    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {

        address = window.tronWeb.defaultAddress.base58;

        contract = await tronWeb
            .contract()
            .at(contractAddress);


        getPlanPercent(document.getElementById('depositTermSlider').value);

    } else {
        if (!alerted && connectCount >= 2) {
            alert("Connect or sign into your Tronlink Wallet")
            alerted = true;
        }



    }
    connectCount++

}

async function withdraw() {
    var parameter = [];
    var options = {

    };
    const transaction = await tronWeb.transactionBuilder.triggerSmartContract(contractAddress, "withdraw()", options, parameter, address);
    let signedTrx = await tronWeb.trx.sign(transaction.transaction);
    var broastTx = await tronWeb.trx.sendRawTransaction(signedTrx)


}


function confirmCutAndRun() {
    alertify.confirm('CUT & RUN ?', 'Are you positive youd like to take your ' + numberWithCommas(((cutAndRunValue / 2) - withdrawn) / 1000000) + ' TRX and lose potential profits from your stakes? They will be deleted and this is all you will get.', function() {
        cutAndRun()
    }, function() { //Error

    });
}

async function cutAndRun() {



    var parameter = [];
    var options = {

    };
    const transaction = await tronWeb.transactionBuilder.triggerSmartContract(contractAddress, "cutAndRun()", options, parameter, address);
    let signedTrx = await tronWeb.trx.sign(transaction.transaction);
    var broastTx = await tronWeb.trx.sendRawTransaction(signedTrx);



}

function handleStakeChange(e) {
    potentialStaked = e.target.value;
    calculateProfit();
}

function handleCapitalCheck(e) {
    compounded = e.currentTarget.checked;
    getPlanPercent(document.getElementById('depositTermSlider').value);
    calculateProfit();
}

async function invest() {
    let referringAddress = "";




    if (potentialStaked <= maxAllowed && potentialStaked >= minAllowed && (userStaked / 1000000) < maxTotalStaked) {


        if (getURLParameter('r')) {
            if (getURLParameter('r') != "") {

            }
            referringAddress = getURLParameter('r');

        } else {

            referringAddress = address

        }

        var parameter = [{
            type: 'address',
            value: referringAddress
        }, {
            type: 'uint8',
            value: selectedPlan
        }];
        var options = {
            feeLimit: 100000000,
            callValue: potentialStaked * 1000000,
            // tokenId:1000002,
            // tokenValue:potentialStaked,
        };



        const transactionObject = await tronWeb.transactionBuilder.triggerSmartContract(
            contractAddress,
            "invest(address,uint8)",
            options,
            parameter,
            tronWeb.defaultAddress.base58
        );

        if (!transactionObject.result || !transactionObject.result.result)
            return console.error('Unknown error: ' + txJson, null, 2);

        // Signing the transaction
        const signedTransaction = await tronWeb.trx.sign(transactionObject.transaction);

        if (!signedTransaction.signature) {

            return console.error('Transaction was not signed properly');
        } else {
            const broadcast = await tronWeb.trx.sendRawTransaction(signedTransaction);

        }

        // Broadcasting the transaction
    } else {


        if (potentialStaked > maxAllowed) {
            alertify.alert('Max Stake', 'The Max stake is limited to ' + maxAllowed + ' please stake that amount or less', function() {

            });
        }

        if (potentialStaked < minAllowed) {
            alertify.alert('Minimum Stake', 'The Minimum stake is limited to ' + minAllowed + ' please stake that amount or greater', function() {

            });
        }


        if (potentialStaked > maxTotalStaked) {
            alertify.alert('Maximum amount at stake', 'Your Max Total staked is 1,000,000. You have too much in play. Please wait for your stakes to end to reinvest', function() {});

        }

    }






}


function getPlanPercent(plan) {
    days = 21;

    switch (plan) {
        case 0:
        case "0":
            days = 14;
            if (compounded) {
                selectedPlan = 3;

            } else {
                selectedPlan = 0;

            }
            break;
        case 1:
        case "1":
            days = 21;
            if (compounded) {
                selectedPlan = 4;

            } else {
                selectedPlan = 1;

            }
            break;
        case 2:
        case "2":
            days = 28;
            if (compounded) {
                selectedPlan = 5;

            } else {
                selectedPlan = 2;

            }


            break;

    }

    document.getElementById('depositTermSelected').innerHTML = days + " Days";

    if (compounded) {
        document.getElementById('youWillGet').innerHTML = "AFTER " + days + " DAYS YOU WILL HAVE" + "<p><small>WITHDRAW AVAILABLE AFTER TERM</small></p>";

    } else {
        document.getElementById('youWillGet').innerHTML = "in " + days + " DAYS YOU WILL HAVE" + "<p><small>(DAILY WTHIDRAW)</small></p>";

    }



    calculateProfit()




}

async function calculateProfit() {

    let plan = document.getElementById('depositTermSlider').value;
    let percentage = contract.getPercent(plan).call();
    var percentePromise = percentage.then(function(result) {
        percent = parseInt(Number(result._hex));
        document.getElementById('dailyProfit').innerText = percent / 10 + "%";
        totalTronForCurrentPlan = percent * days * document.getElementById('depositAmount').value / 1000;
        potentialStaked = document.getElementById('depositAmount').value;


        if (compounded) {
            document.getElementById('calculatedTrx').innerText = numberWithCommas(capitalInvestmountAmount(potentialStaked).toFixed(6)) + " TRX";

        } else {
            document.getElementById('calculatedTrx').innerText = numberWithCommas(totalTronForCurrentPlan) + " TRX";

        }


    });


}

function capitalInvestmountAmount(initialInvestment) {
    //A = P(1+r)t
    var per = (percent / 1000);
    var returnOnInvestment = (initialInvestment * (1 + per) ** days) - initialInvestment;
    return returnOnInvestment;

}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


async function updateContractData() {



    userAvailable = await contract.getUserAvailable(address).call().then(function(result) {
        userAvailableTron = parseInt(Number(result._hex));
    });


    contractBalance = await contract.getContractBalance().call().then(function(result) {
        contractTronBalance = parseInt(Number(result._hex));
    });

    userTotalStaked = await contract.getUserTotalDeposits(address).call().then(function(result) {
        userStaked = parseInt(Number(result._hex));
    });

    userWithdrawn = await contract.getUserWithdrawn(address).call().then(function(result) {
        withdrawn = parseInt(Number(result._hex));
    });

    cutAndRunThreshHold = await contract.getUserTotalAtStake(address).call().then(function(result) {
        cutAndRunValue = parseInt(Number(result._hex));
        userStaked = cutAndRunValue
    });

    totalDeposits = await contract.getUserAmountOfDeposits(address).call().then(function(result) {
        numberOfDeposits = parseInt(Number(result._hex));
    });

    checkPoint = await contract.getUserCheckpoint(address).call().then(function(result) {
        userCheckpoint = parseInt(Number(result._hex));
    });

    refferredByYou = await contract.getUserDownlineCount(address).call().then(function(result) {
        refferredByYou = 0;
        for (var i = 0; i < result.length; i++) {

            switch (i) {
                case 0:
                    refferredByYouLvl1 = parseInt(Number(result[0]._hex));
                    document.getElementById('lvl1Ref').innerText = refferredByYouLvl1;

                    break;
                case 1:
                    refferredByYouLvl2 = parseInt(Number(result[1]._hex));
                    document.getElementById('lvl2Ref').innerText = refferredByYouLvl2;

                    break;

                case 2:
                    refferredByYouLvl3 = parseInt(Number(result[2]._hex));
                    document.getElementById('lvl3Ref').innerText = refferredByYouLvl3;

                    break;
            }
        }


    });


    referralBonus = await contract.getUserReferralBonus(address).call().then(function(result) {
        referralBonusTotal = parseInt(Number(result._hex));
        document.getElementById('refBonusTotal').innerText = numberWithCommas(referralBonusTotal / 1000000);


    });

    referralWithdrawn = await contract.getUserReferralWithdrawn(address).call().then(function(result) {
        referralBonusWithdrawn = parseInt(Number(result._hex));
        document.getElementById('refBonusWithdrawn').innerText = numberWithCommas(referralBonusWithdrawn / 1000000);


    });



    document.getElementById('availableToWithdraw').innerText = userAvailableTron / 1000000;
    document.getElementById('ref-link').value = url + address;


    for (var i = 0; i < numberOfDeposits; i++) {
        // console.log(i)

        contractInfo = await contract.getUserDepositInfo(address, i).call().then(function(result) {
            pln = result.plan;
            s = parseInt(Number(result.start._hex));
            f = parseInt(Number(result.finish._hex));
            a = parseInt(Number(result.amount._hex));
            p = parseInt(Number(result.profit._hex));

            var deposit = {
                plan: pln,
                start: s,
                finish: f,
                amount: a,
                profit: p,
                cp: userCheckpoint
            };
            var activeWrapper = document.getElementById('activeStakes');
            let active_rows = document.createElement('div');
            active_rows.className = 'border w-75 my-4 mx-auto py-2';
            active_rows.id = deposit.start;
            active_rows.style = 'border:1px;';
            sdate = new Date(deposit.start * 1000).toLocaleDateString('en-US');
            fdate = new Date(deposit.finish * 1000).toLocaleDateString('en-US');
            // console.log(result);

            var endedWrapper = document.getElementById('endedStakes');
            let ended_rows = document.createElement('div');
            ended_rows.className = 'border w-75 my-4 mx-auto py-2';
            ended_rows.id = deposit.start + 'ended';
            ended_rows.style = 'border:1px;';

            if (deposit.plan <= 2) {
                if (checkPoint >= deposit.finish) {
                    ended_rows.innerHTML = "<b>" + sdate + " - " + fdate + "</b><br>";
                    ended_rows.innerHTML += calculateWithdrawnForDeposit(deposit) + " / " + (deposit.amount / 1000000).toFixed(6);
                    ended_rows.innerHTML += "<br>(" + (deposit.profit / 1000000).toFixed(6) + " PROFIT EARNED)";
                    if (document.getElementById(deposit.start + 'ended')) {
                        document.getElementById(deposit.start + 'ended').innerHTML = ended_rows.innerHTML;
                    } else {
                        endedWrapper.appendChild(ended_rows);

                    }

                } else {
                    active_rows.innerHTML = "<b>" + sdate + " - " + fdate + "</b><br>";
                    active_rows.innerHTML += calculateWithdrawnForDeposit(deposit) + " / " + (deposit.amount / 1000000).toFixed(6);
                    active_rows.innerHTML += "<br>(" + (deposit.profit / 1000000).toFixed(6) + " POTENTIAL PROFIT)";
                    if (document.getElementById(deposit.start)) {
                        document.getElementById(deposit.start).innerHTML = active_rows.innerHTML;
                    } else {
                        activeWrapper.appendChild(active_rows);

                    }
                }
            } else {
                if (checkPoint >= deposit.finish) {
                    ended_rows.innerHTML = "<b>" + sdate + " - " + fdate + "</b><br>";
                    ended_rows.innerHTML += calculateWithdrawnForDeposit(deposit) + " / " + (deposit.amount / 1000000).toFixed(6);
                    ended_rows.innerHTML += "<br>(" + (deposit.profit / 1000000).toFixed(6) + " PROFIT EARNED **CAP**)";
                    if (document.getElementById(deposit.start + 'ended')) {
                        document.getElementById(deposit.start + 'ended').innerHTML = ended_rows.innerHTML;
                    } else {
                        endedWrapper.appendChild(ended_rows);

                    }
                } else {
                    active_rows.innerHTML = "<b>" + sdate + " - " + fdate + "</b><br>";
                    active_rows.innerHTML += "0 / " + (deposit.amount / 1000000).toFixed(6);
                    active_rows.innerHTML += "<br>(" + (deposit.profit / 1000000).toFixed(6) + " POTENTIAL PROFIT **CAP**)";
                    if (document.getElementById(deposit.start)) {
                        document.getElementById(deposit.start).innerHTML = active_rows.innerHTML;
                    } else {
                        activeWrapper.appendChild(active_rows);

                    }
                }
            }


        });


    }

    if (withdrawn <= cutAndRunValue / 2) {

        document.getElementById('cutHeader').style.visibility = 'visible';
        document.getElementById('cutAndRunSection').style.visibility = 'visible';
        document.getElementById('cAndR').style.visibility = 'visible';
        document.getElementById('cutAndRunValue').innerText = "CUT & RUN BALANCE: " + numberWithCommas(((cutAndRunValue / 2) - withdrawn) / 1000000);

    } else {
        document.getElementById('cAndR').style.visibility = 'hidden';
        document.getElementById('cutAndRunSection').style.visibility = 'hidden';
        document.getElementById('cutHeader').style.visibility = 'hidden';

    }


    if (contractTronBalance > 0) {
        document.getElementById('contractBalance').innerText = numberWithCommas(contractTronBalance / 1000000) + " TRX";

    }




}

function calculateWithdrawnForDeposit(deposit) {

    fixedPercent = deposit.p / 1000000;
    if (deposit.cp > deposit.finsish) {
        return (deposit.profit)
    } else {
        diff = deposit.cp - deposit.start
        perSecondProfit = deposit.profit / (deposit.finish - deposit.start)
        let depositWithdrawn = (perSecondProfit * diff) / 1000000

        if (depositWithdrawn > 0) {
            return depositWithdrawn.toFixed(6);

        } else {
            return 0;

        }
    }
}


function copyLinkToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("ref-link");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

}