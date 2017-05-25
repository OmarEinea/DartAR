#pragma strict

var myDart:GameObject;
var cloneDart:GameObject;
var dartboard:GameObject;
private var animator:Animator;

function Start () {
	animator = GetComponent.<Animator>();
}

function OnDartGrabbed() {
	myDart.SetActive(true);
}

function OnDartDropped() {
	myDart.SetActive(false);
}

function OnDartThrown() {
	Instantiate(cloneDart, myDart.transform.position, transform.rotation, transform);
	myDart.SetActive(false);
}

function Update () {
	animator.SetBool("Dartboard", dartboard.activeSelf);
}
