import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseInterceptors,
  Ip,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(204)
  create(
    @Body()
    body: {
      data: string;
    },
    @Body() createReportDto: CreateReportDto,
    @Ip() ip: string,
  ) {
    return this.reportService.create(createReportDto);
  }
}
