﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
public class TalentAcquisitionStatus
{
	public int Id { get; set; }

	public string Status { get; set; }

	public bool IsActive { get; set; }

	public DateTime CreatedDate { get; set; }

	public virtual ICollection<TalentAcquisitionForm> TalentAcquisitionForms { get; set; } = new List<TalentAcquisitionForm>();
}