﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
public class JobApplicationChoice
{
	public int Id { get; set; }

	public int ApplicationQuestionId { get; set; }

	public string Body { get; set; }

	public bool IsActive { get; set; }

	public virtual JobApplicationQuestion ApplicationQuestion { get; set; }
}