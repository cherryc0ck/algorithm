const solution = (d, budget) => {
d.sort();
let answer = 0;
while (d[0] <= budget) {
budget -= d.shift();
answer++;
}

    return answer;

}
