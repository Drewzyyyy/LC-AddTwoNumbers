var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function displayList(list) {
    var values = [];
    while (list) {
        values.push(list.val);
        list = list.next;
    }
    console.log("Values: ".concat(values.join('')));
}
function addTwoNumbers(l1, l2) {
    var _a, _b, _c, _d;
    var resNode = new ListNode();
    var headNode = resNode;
    var carry = 0;
    var sum = 0;
    displayList(l1);
    displayList(l2);
    while (l1 || l2) {
        sum = ((_a = l1 === null || l1 === void 0 ? void 0 : l1.val) !== null && _a !== void 0 ? _a : 0) + ((_b = l2 === null || l2 === void 0 ? void 0 : l2.val) !== null && _b !== void 0 ? _b : 0) + carry;
        carry = Math.floor(sum / 10);
        resNode.val = sum % 10;
        if ((l1 === null || l1 === void 0 ? void 0 : l1.next) || (l2 === null || l2 === void 0 ? void 0 : l2.next)) {
            var nextNode = new ListNode(carry !== null && carry !== void 0 ? carry : 0);
            resNode.next = nextNode;
            resNode = nextNode;
        }
        l1 = (_c = l1 === null || l1 === void 0 ? void 0 : l1.next) !== null && _c !== void 0 ? _c : null;
        l2 = (_d = l2 === null || l2 === void 0 ? void 0 : l2.next) !== null && _d !== void 0 ? _d : null;
    }
    if (carry != 0) {
        var nextNode = new ListNode(carry);
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
addTwoNumbers(val1_1, val2_1);
