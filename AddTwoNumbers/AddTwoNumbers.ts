class ListNode{
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode|null){
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next)
	}
}

function displayList(list: ListNode): void {
	let values: number[] = [];
	while(list){
		values.push(list.val);
		list = list.next;
	}
	console.log(`Values: ${values.join('')}`);
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null{
	let resNode: ListNode = new ListNode();
	let headNode: ListNode = resNode;
	let carry: number = 0;
	let sum: number = 0;
	displayList(l1);
	displayList(l2);
	while(l1 || l2){
		sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
		carry = Math.floor(sum / 10);
		resNode.val = sum % 10;
		if(l1?.next || l2?.next){
			let nextNode = new ListNode(carry ?? 0);
			resNode.next = nextNode;
			resNode = nextNode;
		}
		l1 = l1?.next ?? null;
		l2 = l2?.next ?? null;
	}
	if(carry!=0){
		let nextNode = new ListNode(carry);
		resNode.next = nextNode;
		resNode = nextNode;
	}
	displayList(headNode);
	return headNode;
}

var val1_7 = new ListNode(9);
var val1_6 = new ListNode(9, val1_7);
var val1_5 = new ListNode(9, val1_6);
var val1_4 = new ListNode(9, val1_5);
var val1_3 = new ListNode(9, val1_4);
var val1_2 = new ListNode(9, val1_3);
var val1_1 = new ListNode(9, val1_2);

var val2_3 = new ListNode(9);
var val2_2 = new ListNode(9, val2_3);
var val2_1 = new ListNode(9, val2_2);
addTwoNumbers(val1_1,val2_1);