﻿using Recruitment.Service.API.Core.Models.CurrentService.Dtos.Assessment;

namespace Recruitment.Service.API.Core.Repositories.CurrentService.Tables;

public interface IDepartmentGroupRepository
{
	Task<List<DropDownValueDto>> SelectClientCompanyGroup();
}