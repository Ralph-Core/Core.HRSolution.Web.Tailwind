﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
public class JobApplicationQuestion
{
	public int Id { get; set; }

	public int JobId { get; set; }

	public string Body { get; set; }

	public string Type { get; set; }

	public bool Required { get; set; }

	public bool IsActive { get; set; }
	public string CreatedBy { get; set; }
	public DateTime CreatedDate { get; set; }

	public virtual JobProfile Job { get; set; }

	public virtual ICollection<JobApplicationAnswer> JobApplicationAnswers { get; set; } = new List<JobApplicationAnswer>();

	public virtual ICollection<JobApplicationChoice> JobApplicationChoices { get; set; } = new List<JobApplicationChoice>();
}