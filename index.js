// ==UserScript==
// @name         Tran vu script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://food.tranvu.info/shopee/report/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tranvu.info
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const a = document.querySelector(
    'body > div.col > div > div > div.bg-white > div.col-md-10.col-md-offset-1.form-group > div:nth-child(6) > div > div'
  );
  const b = document.createElement('div');
  b.innerText = `Count ${a?.children.length - 1}`;
  a.parentElement.parentElement.prepend(b);
  console.log(`Count ${a?.children.length - 1}`);
  // Your code here...
})();

function parseVNDPrice(price) {
  if (!price) {
    alert('Có lỗi xảy ra khi lấy giá đồ ăn, vui lòng thử lại');
  }
  console.log(price);
  return parseInt(price.replace(/[^0-9]/g, ''));
}

const tranVuUserToSettleUpUserMap = {
  'Anh Đỗ Đức': 'Anh.DD',
  'Ánh Phạm Ngọc': 'Chị Ánh',
  'anh.pn': 'Chị Ánh',
  'dai.ndq': 'Đại NĐQ',
  'duong.ttt': 'Dương',
  'Dung Nguyễn Thị Mỹ': 'Chị Dung',
  'dung nguyen': 'Chị Dung',
  'dat.dz': 'Đạt ĐT1',
  'Em DũngCDA': 'Dũng CDA',
  'Hai.nt1@teko.vn': 'Hải',
  'Hai.nt1': 'Hải',
  HienVT: 'Hiền VT',
  'hien.vt': 'Hiền VT',
  'Hien.VT': 'Hiền VT',
  'hien.vn': 'Hiển VN',
  Hiệp: 'Hiệp NT',
  huongdt: 'Hương DT',
  'Huong.dt': 'Hương DT',
  'huhudzsieucapvippro+thangpd': 'Hữu PB',
  'Huy Lê Đức': 'Huy.ld',
  'huy.nn': 'Huy NN',
  'Huy Nguyễn Văn': 'Huy.NV',
  'Nguyễn Thị Hằng': 'Nguyễn Thị Hằng',
  'long.pt': 'Long PT',
  'Ly Ngô Khánh': 'Ly NK',
  'huy.nkq1': 'Kim Q Huy',
  'Huy Nguyễn Kim Quang': 'Kim Q Huy',
  'Long Phan Thành': 'Long PT',
  'long.pt + phuong.bt': 'Long PT',
  'huyen.tb': 'Huyền',
  'Huyen.TB': 'Huyền',
  manhnt: 'Mạnh NT',
  manhds: 'Mạnh DS',
  May: 'May NT',
  'Duy Phạm Lê': 'Phạm Lê Duy',
  minhnv: 'Minh Chủ tịch HĐQT',
  'minh.nv': 'Minh Chủ tịch HĐQT',
  'nam.nt': 'Nam.nt2',
  'nam.nt2': 'Nam.nt2',
  'Nguyễn thành Nam': 'Nam.nt2',
  'Ngọc Phạm Thị Bích': 'Chị Ngọc',
  'nghia.nd': 'Nghĩa NĐ',
  'Nghĩa Ngô Đức': 'Nghĩa NĐ',
  'Nguyễn Huy Hiệu': 'Hiệu Nguyễn Huy',
  'nguyen.ng': 'Nguyên Chủ tịch',
  nguyentd: 'Nguyện TĐ',
  'phuong.bt': 'Phuong BT',
  'Phương Bùi Thu': 'Phuong BT',
  pongpong: 'Pong Pong',
  'sang.vm': 'Sang VM',
  'tri.tm1': 'Trí TM',
  'Tạ Quang Tùng': 'Quang Tùng',
  'Le Quyet': 'Quyết LM',
  'Quyết Lê Minh': 'Quyết LM',
  'quy.tm': 'Quý TM',
  'Quý Trần Minh': 'Quý TM',
  'trinh.tx': 'TrìnhTX',
  'trung.pd': 'Trung PD',
  'Đức Trung Phan': 'Trung PD',
  ThomVT: 'Thơm VT',
  Thùy: 'Chị Thùy',
  'tu.na': 'Tú NA',
  Tuan: 'Tuấn PV',
  'tu.hm': 'Tú Hoàng Minh',
  'Dũng Trần Đăng': 'Dũng TD',
  'Dương Lê Hồng': 'Dương LH',
  'hoa.ctp@teko.vn': 'Hoa CTP',
  'Quân Nguyễn Anh': 'Quân',
  'Vũ Lê Anh': 'Vũ Lê Anh',
  lymin: 'Ly.PK',
  'Vũ Đại Minh': 'Vũ Đại Minh',
  'Minh Vũ Đại': 'Vũ Đại Minh',
  'Ninh Trần Hải': 'Trần Hải Ninh',
  'Hoàn Đặng Văn': 'Hoàn.DV',
  'Thanh Nguyễn Thạc Đan': 'Thanh NTD',
  thuong: 'Thương PH',
  'Tân Hồ Mạnh': 'Tân HM',
  'Yên Nguyễn Thị Bình': 'Yên NTB',
  'Trung Phú Quốc': 'Trung PQ',
  'dang.nh1': 'Đăng Ngô Hải',
  ThoNH: 'Thọ NH',
  'Duy Phan Hữu': 'Duy.ph',
  'Đặng Văn Hoàn': 'Hoàn.DV',
  'Hạnh Bùi Mỹ': 'Hạnh BM',
  'Bằng Hữu Phạm': 'Hữu PB',
  'Anh Nguyễn Việt': 'Anh Nguyễn Việt',
  'Tân Hồ': 'Tân HM',
  "dang.dt": 'Đăng DT',
  "Trần Thị Quỳnh Anh": "Quỳnh Anh",
  "Anh Phan Công": "AnhCP",
  "Vân Vũ Thị Bích": "Bích Vân",
  "Chính Trần Dương": "Chính TD",
  "Hoàng Lan Lê": "Hoàng Lan Lê",
  "Min": "Min",
  "Hải Nguyễn Thanh": "Hải Nguyễn Thanh",
};


const groupId = '-ODB9xrowVLyiNaE3-Ju';

const getSettleUpUsers = async (token) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const res = await fetch(
    `https://settle-up-live.firebaseio.com/members/${groupId}.json?auth=${token}`,
    requestOptions
  );

  return res.json();
};

const getSettleUpDebts = async (token) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const res = await fetch(
    `https://settle-up-live.firebaseio.com/debts/${groupId}.json?auth=${token}`,
    requestOptions
  );

  return res.json();
};

// createTransaction: create a transaction on settle up
// token: token of settle up
// payeeAmountMap: array of payee user id and price of them
// payer: payer user id
// amount: amount of money
// title: title of transaction
const createTransaction = async (
  token,
  payeeAmountArr,
  payer,
  amount,
  title
) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  // Split by share amount

  var raw = JSON.stringify({
    category: '🍲',
    currencyCode: 'VND',
    dateTime: new Date().valueOf(),
    fixedExchangeRate: false,
    items: [
      {
        amount: String(amount),
        forWhom: payeeAmountArr.map((payee) => ({
          memberId: payee.userId,
          weight: payee.amount.toString(),
        })),
      },
    ],
    purpose: title,
    type: 'expense',
    whoPaid: [
      {
        memberId: payer,
        weight: '1',
      },
    ],
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return fetch(
    `https://settle-up-live.firebaseio.com/transactions/${groupId}.json?auth=${token}`,
    requestOptions
  )
    .then((response) => {
      {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
      }
      return response.text();
    })
    .then(() => {
      alert('Đã tạo thanh toán thành công');
    })
    .catch((e) => {
      alert('Có lỗi xảy ra, vui lòng thử lại');
      console.log(e);
    });
};

(function () {
  'use strict';

  const dateElement = document.querySelector(
    'body > div.col > div > div > div.bg-white > div.col-md-10.col-md-offset-1.form-group > h5'
  );

  const orderDate =
    dateElement?.innerText?.replace('Ngày đặt: ', '') ?? 'No date captured';

  const buttonDiv = document.querySelector(
    'body > div.col > div > div > div.bg-white > div.col-md-10.col-md-offset-1.form-group > div.text-center'
  );
  if (buttonDiv) {
    // Add input for settle up token
    const inputSettleUpToken = document.createElement('input');
    inputSettleUpToken.className = 'form-control';
    inputSettleUpToken.placeholder = 'Settle up token';



    const settleUpTokenLocalKey  = 'settleUpTokenTmp';
    const settleUpTokenTmp = localStorage.getItem(settleUpTokenLocalKey);
    if (settleUpTokenTmp) {
      inputSettleUpToken.value = settleUpTokenTmp;
    }

    const inputPayerUser = document.createElement('input');
    inputPayerUser.className = 'form-control';
    inputPayerUser.placeholder = 'Người trả tiền';


    const settleUpPayerUserLocalKey  = 'settleUpPayerUser';
    const settleUpPayerUser = localStorage.getItem(settleUpPayerUserLocalKey);
    if (settleUpPayerUser) {
      inputPayerUser.value = settleUpPayerUser;
    }

    buttonDiv.appendChild(inputSettleUpToken);
    buttonDiv.appendChild(inputPayerUser);

    // Add input for money amount
    const inputMoneyAmount = document.createElement('input');
    inputMoneyAmount.className = 'form-control';
    inputMoneyAmount.placeholder = 'Money amount';
    buttonDiv.appendChild(inputMoneyAmount);
    const transactionIdRegex =
      /https:\/\/food\.tranvu\.info\/shopee\/report\/\?code=(\w+)/gm;
    const transactionId = transactionIdRegex.exec(window.location.href)[1];
    const moneyAmountLocalKey = `settleUpMoneyAmount-${transactionId}`;

    const localMoneyAmount = localStorage.getItem(moneyAmountLocalKey);
    if (localMoneyAmount) {
      inputMoneyAmount.value = localMoneyAmount;
    }

    const titleElement = document.querySelector(
      'body > div.col > div > div > div.bg-white > div.col-md-10.col-md-offset-1.form-group > h4 > a'
    );

    const btnSettleUp = document.createElement('div');
    btnSettleUp.className = 'btn btn-danger btn-lg btn-block';
    btnSettleUp.innerText = `Thanh toán settle up`;

    btnSettleUp.addEventListener('click', async () => {
      createSettleUpTxn(
        inputMoneyAmount.value,
        titleElement?.innerText ?? 'Unknown restaurant',
        inputSettleUpToken.value
      );
      localStorage.setItem(settleUpTokenLocalKey, inputSettleUpToken.value);
      localStorage.setItem(moneyAmountLocalKey, inputMoneyAmount.value);
      localStorage.setItem(settleUpPayerUserLocalKey, inputPayerUser.value);
    });
    buttonDiv.appendChild(btnSettleUp);

    const createSettleUpTxn = async (amount, restaurentName, settleUpToken) => {
      const shopeeOrderData = [];
      const foodTable = document.querySelector(
        'body > div.col > div > div > div.bg-white > div.col-md-10.col-md-offset-1.form-group > div > div > div.container'
      );
      Array.from(foodTable.children).forEach((row, index) => {
        if (index < 1) {
          return;
        }
        const priceString = Array.from(
          row.children[1]?.firstElementChild?.firstElementChild.children
        )?.reduce((acc, el) => {
          console.log(el, el.firstElementChild.firstElementChild.children[1].children[1].firstElementChild.children[2].children);

          const noteAndPriceElements = el.firstElementChild.firstElementChild.children[1].children[1].firstElementChild.children[2].children;

          // To get price, take the last element
          return acc + parseVNDPrice(noteAndPriceElements[noteAndPriceElements.length - 1].innerText);
        }, 0);

        if (!priceString || isNaN(priceString)) {
          alert(
            `Có lỗi xảy ra khi lấy giá đồ ăn với ${row.children[0]?.innerText?.trim()}, vui lòng thử lại`
          );
          console.log(row, index);
        }

        const order = {
          name: row.children[0]?.innerText?.trim(),
          price: priceString,
        };
        shopeeOrderData.push(order);
      });
      console.log('shopeeOrderData', shopeeOrderData);

      const usersMap = await getSettleUpUsers(settleUpToken);
      const userNameToIdMap = {};
      const userIdToUserBalanceMap = {};
      console.log(usersMap);
      Object.keys(usersMap).forEach((key) => {
        if (usersMap[key].active) {
          userNameToIdMap[usersMap[key].name] = key;
          userIdToUserBalanceMap[key] = 0;
        }
      });

      console.log('userNameToIdMap', userNameToIdMap);

      const debts = await getSettleUpDebts(settleUpToken);
      console.log(debts);
      debts.forEach((debt, i) => {
        console.log(i, debt);
        userIdToUserBalanceMap[debt.from] -= debt.amount;
        userIdToUserBalanceMap[debt.to] += debt.amount;
      });

      console.log('Balance');
      Object.keys(userIdToUserBalanceMap).forEach((key) => {
        console.log(usersMap[key].name, userIdToUserBalanceMap[key]);
      });

      const orderedFoodUsers = Object.values(shopeeOrderData);
      // const payeeUIDs = orderedFoodUsers.map(
      //   (userName) =>
      //     userNameToIdMap[tranVuUserToSettleUpUserMap[userName.name]]
      // );

      let notFindUsers = [];
      let insufficientBalanceUsers = [];

      console.log({ orderedFoodUsers });

      const payeeAmountArray = orderedFoodUsers.map((order) => {
        const userId = userNameToIdMap[tranVuUserToSettleUpUserMap[order.name]];
        if (!userId) {
          notFindUsers.push(order.name);
        }
        if (userIdToUserBalanceMap[userId] < 50) {
          insufficientBalanceUsers.push(order.name);
        }

        return {
          userId,
          amount: order.price,
        };
      });

      if (notFindUsers.length > 0) {
        alert(`Không tìm thấy user cho ${notFindUsers.join(', ')}`);
        return;
      }
      if (insufficientBalanceUsers.length > 0) {
        alert(`User không đủ số dư tối thiểu: ${insufficientBalanceUsers.join(', ')}`);
      }

      console.log('payeeAmountMap', payeeAmountArray);

      createTransaction(
        settleUpToken,
        payeeAmountArray,
        userNameToIdMap[inputPayerUser.value],
        amount,
        `${truncate(restaurentName, 15)} ${orderDate}`
      );
    };
  }
})();

function truncate(input, length) {
  if (input.length > length) {
    return input.substring(0, length) + '...';
  }
  return input;
}