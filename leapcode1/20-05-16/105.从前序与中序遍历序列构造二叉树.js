/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (64.91%)
 * Likes:    427
 * Dislikes: 0
 * Total Accepted:    63.1K
 * Total Submissions: 96.8K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *

 */
// 0. terminator
// preorder.length == 0
// 1. find a Node

//  1.1 preorder root
//  1.2 root-> midIndex
//  1.3 recursion left section
// 2. return Node;

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 *
 */
var buildTree = function (preorder, inorder) {
  //recursion terminator
  if (preorder.length == 0) return null;

  //process current logic
  let rootValue = preorder[0];
  let mid = inorder.indexOf(rootValue);
  let root = new TreeNode(rootValue);

  //drill down
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid + 1));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
// @lc code=end
