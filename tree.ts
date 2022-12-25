class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  data: string;

  constructor(data: string) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  toString(): string {
    return `\x1b[31m${this.data}\x1b[0m`;
  }
}

const root = new TreeNode("*");
root.left = new TreeNode("*");
root.right = new TreeNode("*");
root.left.left = new TreeNode("*");
root.left.right = new TreeNode("*");
root.right.left = new TreeNode("*");
root.right.right = new TreeNode("O");

function printTree(node: TreeNode, level: number) {
  let character = "";
  if (level === 0) {
    character = "  ⭐";
  } else if (level === 1) {
    character = " ****";
  } else if (level === 2) {
    character = "******";
  } else if (level === 3) {
    character = "*";
  } else if (level === 4) {
    character = "*";
  }

  console.log(character);
  if (node.left) {
    printTree(node.left, level + 1);
  }
  if (node.right) {
    printTree(node.right, level + 1);
  }
}

printTree(root, 0);
