// 体重の数値を得る
let weighit;
weighit = prompt('BMIを測定します。まずはあなたの体重(kg)を半角で入力してください')
// 身長
let height;
height = prompt('BMIを測定します。次にあなたの身長(cm)を半角で入力してください')
// BMI計算
let bmi = weighit / (height * height) * 10000;
// 結果を表示する
let message = 'あなたのBMIは｢' + bmi + '｣です。\n日本の標準範囲は18.5以上25未満です。';
alert(message);