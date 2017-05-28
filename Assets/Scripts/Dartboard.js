#pragma strict

function OnTriggerEnter(col:Collider) {
	col.transform.GetComponent.<Rigidbody>().velocity = Vector3.zero;
	col.transform.GetComponent.<MoveDart>().enabled = false;
	col.transform.SetParent(transform.parent.parent);
}