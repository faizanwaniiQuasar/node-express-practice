function diff(a, b) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] !== b[j]) {
        console.log(a[i]);
      }
    }
  }
}
diff([1, 2], [2, 3]);
