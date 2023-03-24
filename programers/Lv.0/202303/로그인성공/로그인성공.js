// 내 풀이
const solution = (id_pw, db) => {
  const [id, pw] = id_pw;
  [db] = db.filter((v) => v[0] === id_pw[0]);

  return db ? (db[1] === pw ? "login" : "wrong pw") : "fail";
};
// 다른 사람 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
