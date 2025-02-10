/**
 * Calculates the sum of numbers from 1 to n using iterative approach
 * @param n - The upper bound number to sum to
 * @returns The sum of all integers from 1 to n
 * @remarks Time complexity: O(n), Space complexity: O(1)
 */

export function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Calculates the sum of numbers from 1 to n using mathematical formula
 * @param n - The upper bound number to sum to
 * @returns The sum of all integers from 1 to n using formula n*(n+1)/2
 * @remarks Time complexity: O(1), Space complexity: O(1)
 * @see {@link https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF} for formula derivation
 */
export function sum_to_n_b(n: number): number {
    return n * (n + 1) / 2;
}

/**
 * Calculates the sum of numbers from 1 to n using recursive approach
 * @param n - The upper bound number to sum to
 * @returns The sum of all integers from 1 to n
 * @remarks Time complexity: O(n), Space complexity: O(n) due to recursive call stack
 */
export function sum_to_n_c(n: number): number {
    if (n === 0) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
}

