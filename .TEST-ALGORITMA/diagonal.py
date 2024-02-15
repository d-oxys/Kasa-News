def hitung_selisih_diagonal(matriks):
    jumlah_diagonal_pertama = sum(matriks[i][i] for i in range(len(matriks)))
    jumlah_diagonal_kedua = sum(matriks[i][len(matriks)-i-1] for i in range(len(matriks)))

    selisih = jumlah_diagonal_pertama - jumlah_diagonal_kedua

    return selisih

matriks = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
print(hitung_selisih_diagonal(matriks))
