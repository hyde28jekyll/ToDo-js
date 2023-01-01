import "./styles.css";

//Inputボックスの値を取得、クリア
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加
const createIncompleteList = (target) => {
  //div作成
  const div = document.createElement("div");
  div.className = "list-row";

  //li作成
  const li = document.createElement("li");
  // console.log(li);
  li.innerText = target;

  //button（完了）作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンで行削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // ToDoテキストを取得
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻る)生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親を完了から削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divの子に設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  //button（削除）作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンで行削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの子要素設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リスト追加
  document.getElementById("incomplete-list").appendChild(div);
  // console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
