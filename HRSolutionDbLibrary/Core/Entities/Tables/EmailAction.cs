﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
public class EmailAction
{
    public int Id { get; set; }

    public string EmailAction1 { get; set; }

    public bool IsActive { get; set; }

    public virtual ICollection<EmailTemplate> EmailTemplates { get; set; } = new List<EmailTemplate>();
}