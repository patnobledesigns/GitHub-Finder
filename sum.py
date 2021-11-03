def twoSumHashing(my_numbers, target_sum):
    # sums = []
    hashTable = []

    for i in range(len(my_numbers)):
        complement = target_sum - my_numbers[i]

        if complement in hashTable:
            print(
                f"Pair with sum {target_sum} is: ( {my_numbers[i]} , {complement} )")
        hashTable.append(my_numbers[i])
    print(hashTable)


# Driver Code
my_numbers = [3, 5, -4, 8, 11, 1, -1, 6]
target_sum = 9

# Calling function
twoSumHashing(my_numbers, target_sum)
