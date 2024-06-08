export function formatNumber(num: number) {
 const abbreviations = ['k', 'M', 'B', 'T']; // (k: 천, M: 백만, B: 십억, T: 조 등)
 const tier = (Math.log10(Math.abs(num)) / 3) | 0; // 숫자의 자리수 계산
 if (tier === 0) return num; // 1000 미만의 경우 그냥 반환
 const suffix = abbreviations[Math.min(tier - 1, abbreviations.length - 1)]; // 최대 허용 범위 내에서 수치 축약어 선택
 const scaled = num / Math.pow(10, tier * 3);
 return scaled.toFixed(1) + suffix; // 소수점 아래 1자리까지 표시
}
